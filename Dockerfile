FROM node:24-slim

WORKDIR /app

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm install && \
  npm cache clean --force

COPY index.js config ./

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8787

ENTRYPOINT ["/entrypoint.sh"]
