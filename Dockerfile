FROM node:24-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY index.js wrangler.jsonc ./

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8787

ENTRYPOINT ["/entrypoint.sh"]
