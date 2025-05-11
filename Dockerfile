# 1. Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Copy files
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# 2. Production stage
FROM node:18-alpine
WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files
COPY --from=builder /app ./
RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
