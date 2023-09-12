FROM node:18.17.1

WORKDIR /app

COPY package.json ./

RUN npm install --only=development

COPY . .

EXPOSE 3000

RUN npm run build
CMD npm run start:prod