FROM node:alpine3.21

WORKDIR /app_folder

COPY *.json ./

RUN npm install 

COPY . . 

EXPOSE 7000

CMD ["node", "server.js"]