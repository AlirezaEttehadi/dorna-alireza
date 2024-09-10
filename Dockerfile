# Stage 1: Build the app
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the entire application code into the container
COPY . .

# Build the Next.js app
RUN yarn build

# Stage 2: Build the final image
FROM node:20-alpine

# Set environment variables for the application
ENV NODE_ENV production

# Set the working directory inside the container
WORKDIR /app

# Copy the build output and necessary files from the builder stage into the final image
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# Install only production dependencies
RUN yarn install --production

# Expose the specified port for the application
EXPOSE 3000

# Run the application when the container starts
CMD ["yarn", "start"]
