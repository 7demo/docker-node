FROM node:4.2.2
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY server.js /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE 9090
#ENTRYPOINT ['npm','start']
CMD node server.js