FROM node:22-alpine AS base

FROM base AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci


FROM base

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
