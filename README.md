# Project Showcase - Frontend

hehe

## How to Run

```bash
cd front-end
npm install
npm run dev
```

## Using Docker Containers

```bash
# Build the Docker image
docker image build -t ps-frontend .
# Run the image as a Docker container
# Use the optional -it flag for interactive mode
docker run -it --name ps-frontend-container -p 3000:3000 ps-frontend
# Use the optional -d flag for detached mode
docker run -d --name ps-frontend-container -p 3000:3000 ps-frontend
```