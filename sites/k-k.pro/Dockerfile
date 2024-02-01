FROM node:18-slim

WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build:next

EXPOSE 3000

CMD ["npm", "start"]
