FROM node:alpine
WORKDIR /app
RUN  yarn global add pm2
COPY package.json .   
COPY yarn.lock . 
RUN yarn install
COPY . .
EXPOSE 1330
CMD ["pm2-runtime", "process.yml"]
