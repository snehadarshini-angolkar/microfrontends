mf-container application as the name suggests is the application which holds the micro 
frontends (mf-app1 and mf-app2) .

To run the entire application locally 
Clone the project 
## Build and package mf-app1
cd mf-app1 
npm install
npm run packagr 

## Build and package mf-app2 
cd mf-app2 
npm install
npm run packagr 

## Build the container application
cd mf-container
npm install 
npm run start 

##In order to run the applications mf-app1 and mf-app2 separately do the following
cd mf-app1
npm install
npm run start

cd mf-app1
npm install 
npm run start 

## if it throws an error for port 
change the port before running npm run start 




