# How to run the app locally

## Build the docker image

- ```docker build -t <image_name> .```

## Check docker images
- ```docker images```

## Run the image and expose the ports
- ```docker run -p 5173:5173 <image_name>```


## Login
- use *admin* as username and *password123* as password for login and access the protected routes