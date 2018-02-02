FROM node:9.2-slim

RUN apt-get update \
  && npm install http-server -g \
  && npm install spa-http-server -g 

EXPOSE 8080

CMD ["http-server", "/usr/src/app", "--push-state"]