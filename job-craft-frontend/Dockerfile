# Stage 1 — build
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./
RUN npm ci

# Copy all frontend source files (context is job-craft-frontend)
COPY . ./
RUN npm run build

# Stage 2 — serve with nginx
FROM nginx:stable-alpine
# Clean default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Vite output directory is /app/dist
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
