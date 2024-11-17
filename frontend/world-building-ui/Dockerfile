# Use Node.js for building the app
FROM node:18 AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire codebase
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight Node.js image to serve the app
FROM node:18
WORKDIR /usr/src/app
COPY --from=build /usr/src/app ./
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]
