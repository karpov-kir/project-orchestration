# Overview

A simple orchestration wrapper around my projects using Docker Swarm.

## How to set up a server

- Get an Ubuntu server
- Connect via SSH

Use the `root` user for the following steps.

- Add an `admin` user
  - `adduser admin` (all answers can be empty with the exception of the password)
  - Setup SSH access
    - `mkdir 700 -p /home/admin/.ssh/`
    - `echo "<publicSshKey>" >> /home/admin/.ssh/authorized_keys`
    - `chmod 600 /home/admin/.ssh/authorized_keys`
    - `chown -R admin:admin /home/admin/.ssh`
    - Enable only the `admin` user to access the server (might take some time to block the root SSH access)
      - `echo "AllowUsers admin" >> /etc/ssh/sshd_config.d/custom.conf`
      - `echo "PermitRootLogin no" >> /etc/ssh/sshd_config.d/custom.conf`
        - Also comment out `PermitRootLogin yes` and `PasswordAuthentication yes` all files returned by `grep -r PermitRootLogin /etc/ssh/` and `grep -r PasswordAuthentication /etc/ssh/`
    - Disable SSH password authentication
      - `echo "PasswordAuthentication no" >> /etc/ssh/sshd_config.d/custom.conf`
    - Remove the existing cloud init config
      - `rm /etc/ssh/sshd_config.d/50-cloud-init.conf`
    - `systemctl daemon-reload && systemctl restart ssh.socket`
  - Allow `sudo` access
    - `usermod -aG sudo admin`

Use the `admin` user for all later steps.

- Upgrade `sudo apt update && sudo apt upgrade`
- Install Git `sudo apt install git`
  - Clone this repo to a folder `cd ~ && git clone https://github.com/karpov-kir/projects-orchestration.git`
- Install Docker
  - Follow steps in https://docs.docker.com/engine/install/ubuntu
  - Add the `admin` user to the Docker group to allow using it without sudo `sudo usermod -aG docker admin`
    - Reboot the server to apply the changes, otherwise the `systemctl` won't have access to the Docker daemon
  - `docker login`
- Setup Docker Swarm
  - `docker swarm init --advertise-addr $(hostname -I | awk '{print $1}')`
  - `docker network create --driver=overlay --attachable traefik_network`
- Set up basic auth login/password
  - `sudo apt install apache2-utils`
  - Set up login/password for the private Docker registry (https://earthly.dev/blog/private-docker-registry)
    - `mkdir ~/project-orchestration/services/dockerRegistry/auth`
    - `cd ~/project-orchestration/services/dockerRegistry/auth`
    - `htpasswd -Bc registry.password admin` (it will ask for a password)
  - Set up login/password for the Traefik dashboard / Docker Registry UI / Dozzle UI
    - `mkdir ~/project-orchestration/services/reverseProxy/auth`
    - `cd ~/project-orchestration/services/reverseProxy/auth`
    - `htpasswd -Bc basic-auth.password admin` (it will ask for a password)
- Configure UFW (Firewall)
  - There are some prebuilt configs in `ls /etc/ufw/applications.d/`, also can be checked with `sudo ufw app list`
  - Enable UFW rules and UFW itself (allow only HTTP (80), HTTPS (443) and SSH (22))
    - `sudo ufw default deny`
    - `sudo ufw allow 'OpenSSH'`
    - `sudo ufw allow 443/tcp`
    - `sudo ufw allow 443/udp`
    - `sudo ufw allow 80/tcp`
    - `sudo ufw enable`
    - Ensure there are no open reachable ports:
      - On the server `sudo netstat -tulnp | grep LISTEN`
      - On another machine `nc -zv <IP> <PORT>`
- Add services to Docker Swarm
  - `docker stack deploy --with-registry-auth -c ~/project-orchestration/services/reverseProxy/docker-compose.yml reverse-proxy`
  - `docker stack deploy --with-registry-auth -c ~/project-orchestration/services/whoami/docker-compose.yml whoami`
  - `docker stack deploy --with-registry-auth -c ~/project-orchestration/services/dockerRegistry/docker-compose.yml docker-registry`
  - `docker stack deploy --with-registry-auth -c ~/project-orchestration/services/sites/docker-compose.yml sites`
  - `docker stack deploy --with-registry-auth -c ~/project-orchestration/services/guessir/docker-compose.yml guessir`
  - `docker stack deploy --with-registry-auth -c ~/project-orchestration/services/dozzle/docker-compose.yml dozzle`
  - `docker stack deploy --with-registry-auth -c ~/project-orchestration/services/sonarQube/docker-compose.yml sonarqube` (default credentials: `admin`/`admin`)
  - `docker stack deploy --with-registry-auth -c ~/project-orchestration/services/swarmpit/docker-compose.yml swarmpit`
  - `docker stack deploy --with-registry-auth -c ~/project-orchestration/services/wordToPdf/docker-compose.yml word-to-pdf`

## How to make a service use the latest image

- Build and publish a new image using `npm run build:docker && npm run publish:docker`
- Update the affected services using `docker service update --with-registry-auth --force <stackName>_<serviceName>`
  - Or use the "Redeploy" action in the Swarmpit UI

## How to update a service
- Change the service's configuration in the `docker-compose.yml` file
- Use `docker stack deploy --with-registry-auth -c ~/project-orchestration/services/<stackName>/docker-compose.yml <stackName>`
  - Only the changed services will be updated

## Useful commands
- Get the running services using `docker service ls`
- Check for startup errors using `docker service ps --no-trunc <service_name>`
- Check the logs of the service using `docker service logs <service_name>`
- Expose a port to the server's localhost only `docker run --rm --name socat -p 127.0.0.1:5432:5432 --network traefik_network --rm -it alpine/socat tcp-listen:5432,reuseaddr,fork tcp:word-to-pdf_db:5432` in order to connect to it over SSH tunneling
