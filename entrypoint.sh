#!/bin/sh
set -e

if [ ! -f "/app/config/wrangler.jsonc" ]; then
  mkdir -p /app/config
  cp -r /app/default/* /app/config/
fi

if [ ! -f "./src/index.js" ]; then
  echo "未检测到 src/index.js，执行初始化..."
  npm run init
else
  echo "检测到 src/index.js，启动 wrangler..."
  npm run start
fi
