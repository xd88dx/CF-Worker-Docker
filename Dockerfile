FROM node:24-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY index.js wrangler.jsonc ./

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8787

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["/entrypoint.sh"]
