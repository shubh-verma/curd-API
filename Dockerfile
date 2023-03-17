FROM node:latest
WORKDIR /curd-api
COPY . /curd-api
RUN npm install
COPY . .
EXPOSE 3000
CMD node backend/index.js