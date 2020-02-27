FROM ubuntu

WORKDIR /opt/jssdk-test

RUN apt-get update && apt-get install -y curl
RUN apt-get update && apt-get install -y iputils-ping
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm install -g yarn

COPY . .

RUN yarn install

CMD ["yarn", "server"]