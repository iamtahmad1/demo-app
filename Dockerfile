# Build Stage
FROM node:22-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies (using npm ci for faster and cleaner installs)
RUN npm ci

# Copy the source code into the container
COPY . .

# Production Stage (Minimize size by copying only necessary files)
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the production dependencies and the necessary app files from the build stage
COPY --from=build /app /app

# Install production dependencies only (this avoids dev dependencies)
RUN npm ci --only=production

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
