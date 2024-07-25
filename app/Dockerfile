# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Run tests
RUN npm run test

# Expose port 5173 to the outside world
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
