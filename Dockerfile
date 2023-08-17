# Used only for preview builds

FROM node:17-alpine

ENV release_mode="staging"

ENV BUILD_VERSION="2.0"

RUN apk add --update git \
    bash \
    yarn

#WORKDIR /app
WORKDIR /msdl/docs

# Bundle app source
COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "run", "serve"]