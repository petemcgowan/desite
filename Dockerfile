
# Part 1 - Build Frontend Project + assets

# this is the same as current local Node version, but alpine variety
FROM node:14.3.0-alpine as build

# a test comment to trigger re-deploy

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Part 2 - Serve Frontend

# Brotli's deal is it gives better compression than Gzip, this nginx image has "Stable nginx with Google Brotli compression module, based on Alpine "
FROM fholzer/nginx-brotli:v1.19.1

WORKDIR /etc/nginx
ADD ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
