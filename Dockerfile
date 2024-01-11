# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install

# Bundle app source
COPY . ./

# Bind the port that the app will run on
EXPOSE 3001

# Command to run the app
CMD [ "yarn", "dev", "-p", "3001" ]
