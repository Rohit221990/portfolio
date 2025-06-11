FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm build

RUN ls -la /app
RUN ls -la

#react-scripts@3.4.1 -g --silent

# Expose the port the app runs on
EXPOSE 3000

CMD ["node", "server.js"]

COPY build/ /usr/share/nginx/html/