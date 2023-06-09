FROM node as builder

WORKDIR /app

COPY src/package*.json ./
RUN npm ci

COPY src/ .
RUN node ./node_modules/@angular/cli/bin/ng build

FROM nginx
EXPOSE 80

COPY --from=builder /app/dist/mrf-service-frontend /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf