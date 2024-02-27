### To build project from zero:

##1 (if any changes in docker/Dockerfile-frontend)
#container-build:
#	docker buildx build -f docker/Dockerfile-frontend frontend

#2 build images
build-images:
	docker compose build

#3 build front
build-frontend:
	docker compose run --rm frontend bash -c "yarn install && yarn build"

#4 up containers
up:
	docker compose up -d

down:
	docker compose down

dev-frontend:
	docker compose run -p "13200:3000" --rm frontend bash -c "yarn run dev"

cmd-frontend:
	docker compose run --rm frontend bash
