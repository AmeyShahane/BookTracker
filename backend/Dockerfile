FROM node:18.16.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV MONGODB_USERNAME = admin

ENV MONGODB_PASSWORD = admin

EXPOSE 5000

CMD ["npm", "start"]