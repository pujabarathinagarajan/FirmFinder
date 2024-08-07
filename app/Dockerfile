# Stage 1: Build Stage
FROM node:20 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Add node_modules/.bin to PATH to ensure Vite is found
ENV PATH /app/node_modules/.bin:$PATH

# Install the Rollup binary if on linux/arm64
RUN if [ "$(uname -m)" = "aarch64" ]; then npm install @rollup/rollup-linux-arm64-gnu; fi

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production Stage
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app .

# Run tests (optional)
RUN npm run test

# Expose port 5173 to the outside world
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
