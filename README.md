<h1>React RxJs</h1>

## Starting local:

- Install node_modules:
  - `npm install`
- After module installed:
  - `npm run dev` - for development

## Starting with Docker

Run this command to build the image on your local machine and start the container. You only need to run this command the first time, and whenever you make changes to docker-compose.yml

```bash
docker-compose build
```

#

From the second time, we can use:

```bash
docker-compose up -d
```

##

When container is up and you should be able to test it using the following command.

```bash
docker-compose ps
```

## PS

- application starts on port:`8080`
- testing auth: login: `test` password: `test`
