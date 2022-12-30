FROM node:19.3.0-alpine3.16 as build
WORKDIR /valservicewebform/app
RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

EXPOSE 443
EXPOSE 80

FROM nginx as runtime
COPY --from=build /valservicewebform/app/dist/val-service-web-form /usr/share/nginx/html
