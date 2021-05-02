# Use an existing docker image as a base
# Instruction
FROM alpine


# Download and install a dependency
# Run
RUN apk add --update gcc
RUN apk add --update redis


# Tell the image what to do when it starts as a container
# Command instruction
CMD ["redis-server"]