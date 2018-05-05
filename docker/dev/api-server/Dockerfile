FROM node:9.2-slim

RUN npm install -g pm2 

RUN apt-get update \
  && apt-get install -y sudo

EXPOSE 3000

CMD ["/usr/src/app/docker_init.sh"]
