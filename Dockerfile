# Multi-stage build for optimized Astro.js production
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage - serve with Node.js
FROM node:20-alpine AS runner

WORKDIR /app

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Start the server - listen on 0.0.0.0 for Docker
CMD ["npx", "serve", "dist", "-l", "tcp://0.0.0.0:3000", "--single"]
