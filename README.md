# Overview

A simple wrapper around personal project that includes:

- An Nginx configuration to serve personal projects over HTTP
  - HTTPS is provided by Cloudflare on the DNS level, thus there are configurations only for HTTP in this repo
- Utilities to download and build projects
- Docs on how to set up a server

At least the following configuration is required:

- A domain + sub domains
- A DNS hosting with inbuilt HTTPS, e.g. Cloudflare
- An Ubuntu server in a VM hosted in a compute cloud provider
  - A static IP address
  - 3 GB RAM
  - Simple 2 vCPU with at least 50% proportion of guaranteed performance
  - 10 GB SSD

## How to set up a server

- Get an Ubuntu server
- Connect via SSH
- Disable SSH password authentication
  - `sudo nano /etc/ssh/sshd_config`, make sure that this is set `PasswordAuthentication no`
- Install GIT `sudo apt install git`
  - Clone this repo to a folder including the submodules `cd ~ && git clone --recursive https://github.com/karpov-kir/k-k.io.git`
- Install Node.js, NPM `sudo apt install nodejs npm`, reload ENV variables `hash -r`
  - Install `n` package to switch Node.js versions `sudo npm install n -g`
  - Switch to Node.js 17 version `sudo n 17`
  - Install packages `cd ~/k-k.io && npm ci`
  - There are already prepared (built) projects in `k-k.io/preparedModules`, so they can be served / started without
    building (check `nginx-k-k.io.conf` for a reference). The projects are built locally as the server might be
    limited in resources.
- Install Nginx
  - Add the Nginx config to the enabled sites `sudo ln -s /home/admin/k-k.io/nginx-k-k.io.conf /etc/nginx/sites-enabled/`
  - Reload Nginx `sudo nginx -s reload`
- Install PostgresSQL `sudo apt install postgresql postgresql-contrib pgcli`
  - Create an admin user `sudo -u postgres createuser admin`
  - Create DBs
    - `sudo -u postgres createdb guessir`
    - `sudo -u postgres createdb sonarqube`
  - Set the user's password `sudo -u postgres pgcli`, `ALTER ROLE admin WITH PASSWORD 'admin';`
- Install Docker
  - Follow steps in https://docs.docker.com/engine/install/ubuntu
  - Add the user to the Docker group to allow using it without sudo `sudo usermod -aG docker $USER`
    - Close console and connect again
- Install and start SonarQube
  - Extend `vm.max_map_count` as it is required to start SonarQube
    - `sudo nano /etc/sysctl.conf` and add / update `vm.ma_map_count` entry to be `vm.max_map_count=262144`
    - `sudo sysctl -p`
  - `docker run -d --name sonarqube --restart always --net=host -e SONARQUBE_JDBC_USERNAME=admin -e SONARQUBE_JDBC_PASSWORD=admin -e SONARQUBE_JDBC_URL=jdbc:postgresql://127.0.0.1:5432/sonarqube mc1arke/sonarqube-with-community-branch-plugin`
    - The argument `--restart always` tells Docker to start the container when the machine boots or if the container fails
    - Read more about the image [here](https://github.com/mc1arke/sonarqube-community-branch-plugin)
- Configure UFW (Firewall)
  - There are some prebuilt configs in `ls /etc/ufw/applications.d/`, also can be checked with `ufw app list`
  - Enable UFW rules and UFW itself (allow only HTTP (80), HTTPS (443) and SSH (22))
    - `sudo ufw default deny`
    - `sudo ufw allow 'Nginx Full'`
    - `sudo ufw allow 'OpenSSH'`
    - `sudo ufw enable`
- Configure `systemctl` to start the backend services
  - Move the unit into `systemd` folder `sudo cp /home/admin/k-k.io/guessir.service /etc/systemd/system`
  - Start the service `sudo systemctl start guessir.service`
  - Check that it's running `sudo journalctl -f -u guessir.service`
  - Start the unit when the machine boots `sudo systemctl enable guessir.service`

## How to redeploy

- Make changes in a source repo of a project, commit and push the changes
- On your local machine open this repo end execute `npm run modules:prepare && npm install` and push the new changes
  - You can use `npm run modules:prepare guessir && npm install` to prepare only a specific module
- On the server execute `cd ~/k-k.io && git pull && npm run modules:update && npm ci`
- Restart the backend services `sudo systemctl restart guessir.service`

## Useful commands

- Check logs of a service `sudo journalctl -f -u guessir.service`
- Restart a service `sudo systemctl restart guessir.service`
- Start / stop a service `sudo systemctl stop guessir.service`, `sudo systemctl start guessir.service`
- Check a service's status `sudo systemctl status guessir.service`
- Connect to PGCLI `pgcli -d guessir`
