# Stage 1 — build
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files first for caching
COPY job-craft-frontend/package*.json ./
RUN npm ci

# Copy source and build (adjust path if your frontend folder differs)
COPY job-craft-frontend/ ./
RUN npm run build

# Stage 2 — serve with nginx
FROM nginx:stable-alpine
# Remove default nginx content (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the build stage — Vite outputs to /app/dist
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
