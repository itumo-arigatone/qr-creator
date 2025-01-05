# Build Stage
FROM node:21.4-alpine AS build

WORKDIR app

# 依存関係のコピー
COPY package.json package-lock.json ./
RUN npm ci

COPY .env ./

# アプリケーションコードのコピー
COPY . .

# Next.js のビルド
RUN npm run build

# Production Stage
FROM node:21.4-alpine AS production

WORKDIR /app

# NODE_ENV の設定
ENV NODE_ENV=production

# 依存関係のコピー（本番用）
COPY package.json package-lock.json ./
RUN npm ci --production

# ビルド成果物のコピー
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000
USER node
CMD ["npm", "start"]
