# Overview

A simple wrapper around personal projects that includes:

- An Nginx configuration to serve personal projects over HTTP
  - HTTPS is provided by Cloudflare on the DNS level, thus there are configurations only for HTTP in this repo
- Some simple sites, which don't make sense to move to separate repos
- Docs on how to set up a server and (re)-deploy sites/services/etc.
- Configs

At least the following configuration is required:

- A domain + sub domains
- A DNS hosting with inbuilt HTTPS, e.g. Cloudflare
- An Ubuntu server
  - A static IP address
  - 5GB RAM
  - 50GB SSD

## How to set up a server

- Get an Ubuntu server
- Connect via SSH

Use the `root` user for the following steps.

- Add an `admin` user
  - `adduser admin`
  - Setup SSH access
    - `mkdir 700 -p /home/admin/.ssh/`
    - `echo "<publicSshKey>" >> /home/admin/.ssh/authorized_keys`
    - `chmod 600 /home/admin/.ssh/authorized_keys`
    - `chown -R admin:admin /home/admin/.ssh`
    - Add or extend `AllowUsers` to include the `admin` user (`AllowUsers root admin`)
      - `nano /etc/ssh/sshd_config`
      - `systemctl restart sshd`
  - Disable SSH password authentication
    - `nano /etc/ssh/sshd_config`, make sure that this is set `PasswordAuthentication no`
  - `systemctl restart sshd`
  - Allow `sudo` access
    - `usermod -aG sudo admin`

Use the `admin` user for all later steps.

- Upgrade `sudo apt update && apt upgrade`
- Install GIT `sudo apt install git`
  - Clone this repo to a folder `cd ~ && git clone https://github.com/karpov-kir/k-k.io.git`
- Install Nginx
  - `sudo apt install nginx`
  - Add the Nginx config to the enabled sites
    - `sudo ln -s /home/admin/k-k.io/nginx-k-k.io.conf /etc/nginx/sites-enabled/`
  - Reload Nginx `sudo nginx -s reload`
- Install Docker
  - Follow steps in https://docs.docker.com/engine/install/ubuntu
  - Add the `admin` user to the Docker group to allow using it without sudo `sudo usermod -aG docker admin`
    - Close console and connect again
- Set up login/password for private Docker registry (https://earthly.dev/blog/private-docker-registry)
  - `mkdir ~/k-k.io/services/privateDockerRegistry/auth`
  - `cd ~/k-k.io/services/privateDockerRegistry/auth`
  - `htpasswd -Bc registry.password admin`
- Configure UFW (Firewall)
  - There are some prebuilt configs in `ls /etc/ufw/applications.d/`, also can be checked with `ufw app list`
  - Enable UFW rules and UFW itself (allow only HTTP (80), HTTPS (443) and SSH (22))
    - `sudo ufw default deny`
    - `sudo ufw allow 'Nginx Full'`
    - `sudo ufw allow 'OpenSSH'`
    - `sudo ufw enable`
- Configure `systemctl` to start the services
  - Add the units to the `systemd` folder
    - `mkdir -m 755 -p ~/.config/systemd/user`
    - `ln -s /home/admin/k-k.io/systemdServices/guessir.service ~/.config/systemd/user`
    - `ln -s /home/admin/k-k.io/systemdServices/privateDockerRegistry.service ~/.config/systemd/user`
    - `ln -s /home/admin/k-k.io/systemdServices/sites.service ~/.config/systemd/user`
    - `ln -s /home/admin/k-k.io/systemdServices/sonarQube.service ~/.config/systemd/user`
      - Add `vm.max_map_count=262144` to the end of `/etc/sysctl.conf` (required for SonarQube)
  - Start the services
    - `systemctl --user start sonarQube.service`
    - `systemctl --user start privateDockerRegistry.service`
      - Log in the server to the registry so it can access images: `docker login https://dr.k-k.io` and use `admin` as login and the password you've used within the previous steps
      - Make sure all images are published before starting the next services
    - `systemctl --user start guessir.service`
    - `systemctl --user start sites.service`
  - To check if a service is running use `journalctl --user -f -u guessir.service`
  - Start the units when the machine boots:
    - `systemctl --user enable guessir.service`
    - `systemctl --user enable privateDockerRegistry.service`
    - `systemctl --user enable sites.service`
    - `systemctl --user enable sonarQube.service`
    - `loginctl enable-linger admin`

Optional:

- Install NVM
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`, reload `.bashrc` settings `source ~/.bashrc`
- Install Node.js, NPM 
  - `nvm install 20`

## How to redeploy

- Build and publish a new image using `npm run build:docker && npm run publish:docker`
- Restart the affected services using `systemctl --user restart <serviceName>`

## Useful commands

- Check logs of a service `journalctl --user -f -u guessir.service`
- Restart a service `systemctl --user restart guessir.service`
- Start / stop a service `systemctl --user stop guessir.service`, `sudo systemctl start guessir.service`
- Check a service's status `systemctl --user status guessir.service`
- In order to serve a static folder move the folder to the `www-data` user folder and make it available for Nginx
  - `sudo mkdir -m 755 -p /home/www-data`
  - `sudo chown -R www-data:www-data /home/www-data`
  - `sudo cp -r /home/admin/<staticFolder> /home/www-data`
  - `sudo chown -R www-data:www-data /home/www-data/<staticFolder>`
