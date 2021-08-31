# Create a .env file in the root and add the environment variables:

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id

# For Frontend:

npm i to install the dependencies.

# Run frontend (:3000) & backend (:5000)

npm run dev

# Run backend only

npm run server

# You can use the following commands to seed the database with some sample users and products as well as destroy all data

# Import data

npm run data:import

# Destroy data

npm run data:destroy
