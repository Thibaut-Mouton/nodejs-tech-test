FROM node:18-alpine3.14

COPY package*.json ./
RUN npm ci --production

COPY dist ./

EXPOSE 3000

CMD ["npm", "start:prod"]

