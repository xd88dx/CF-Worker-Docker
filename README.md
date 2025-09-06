# cf-worker-docker

```shell
docker run --rm xd88dx/cfwork-docker
```

> ctrl+c 终止容器后,将需要部署的 cloudflare worker 项目置于当前路径 cfdocker/src 目录下,然后执行

- docker run

  ```shell
  docker run -d \
    --name cfdocker \
    --restart always \
    --network host \
    -e TZ=Asia/Shanghai \
    -v ./cfdocker/src:/app/src \
    -v ./cfdocker/data:/app/data \
    -v ./cfdocker/config:/app/config \
    xd88dx/cfwork-docker
  ```

- docker compose

  ```yaml
  services:
    cfdocker:
      image: xd88dx/cfwork-docker
      container_name: cfdocker
      restart: always
      environment:
        - TZ=Asia/Shanghai
      network_mode: host
      volumes:
        - ./cfdocker/src:/app/src
        - ./cfdocker/data:/app/data
        - ./cfdocker/config:/app/config
  ```

访问[http://127.0.0.1:8787](http://127.0.0.1:8787)即可
