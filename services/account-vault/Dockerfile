# ───── Stage 1: deps ─────
FROM node:22-slim AS deps

WORKDIR /app

COPY package*.json ./
RUN npm ci --ignore-scripts

# ───── Stage 2: builder ─────
FROM node:22-slim AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ───── Stage 3: dev ─────
FROM node:22-slim AS dev

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# dev не нужен root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["npm", "run", "start:dev"]

# ───── Stage 4: prod ─────
FROM node:22-slim AS prod

WORKDIR /app

RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts && npm cache clean --force

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY prisma ./prisma

RUN addgroup -S appgroup && adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app

USER appuser

EXPOSE 3002

CMD ["node", "dist/main.js"]