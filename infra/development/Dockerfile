FROM node:14.16.0-alpine3.10

# configure localtime
ENV TZ=America/Sao_Paulo
RUN apk add --update --no-cache tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

WORKDIR /app

RUN npm install --unsafe-perm --force -g yarn && \
    chmod +x /usr/local/bin/yarn

# ENTRYPOINT ls -la

ENTRYPOINT rm -rf node_modules && \
           yarn && \
           yarn dev