FROM node:10.13-alpine
#ENV NODE_ENV production
#WORKDIR /usr/src/bear
#COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
#RUN npm install --production --silent && mv node_modules ../
#COPY . .
EXPOSE 4001
#CMD npm start