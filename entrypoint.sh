#!/bin/sh
set -e

if [ ! -f "./src/worker.js" ]; then
  echo "未检测到 src/worker.js，执行初始化..."
  npm run init
else
  echo "检测到 src/worker.js，启动 wrangler..."
  npm run start
fi
