# ───── Stage 1: builder ─────
FROM node:25-alpine:3.22 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ───── Stage 2: dev ─────
FROM node:25-alpine:3.22 AS dev

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
CMD ["npm", "run", "start:dev"]

# ───── Stage 3: prod ─────
FROM node:25-alpine:3.22 AS prod

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
EXPOSE 3002
CMD ["node", "dist/main"]