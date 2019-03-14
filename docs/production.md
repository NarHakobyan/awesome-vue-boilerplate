# Building and deploying to production

- [Building and deploying to production](#building-and-deploying-to-production)
  - [From the terminal](#from-the-terminal)
  - [By docker-compose](#by-docker-compose)

## From the terminal

```bash
# Build for production with minification
yarn build:prd
```

This results in your compiled application in a `dist` directory.

## By docker-compose

```bash
PROJECT_NAME=your_project PORT=8080 VERSION=0.0.1 docker-compose up -d
```

after building application will run on background in port 8080