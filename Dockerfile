FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install

RUN react-scripts --openssl-legacy-provider build

copy . ./

CMD ["node", "server.js"]

RUN ls -la /app

#react-scripts@3.4.1 -g --silent

# Expose the port the app runs on
EXPOSE 3000