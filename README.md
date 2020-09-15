# fiboapp
The following repo is a simple nodejs application which uses [IBM Cloud Foundry Deploy GitHub action](https://github.com/subhamX/ibm-cloud-foundry-deploy). This github action builds the application and seamlessly deploys the project to the IBM cloud foundry.


## API Documentation


| Field	| Value                                                                                                                          	|
|-------------	|---------------------------------------------------------------------------------------------------------------------------	|
| **1. URL**         	| /                                                                                                                         	|
| **Method**      	| GET                                                                                                                       	|
| **Description** 	| Generates a random number **n** in the range of 0 to 1000 and returns <br> the nth and (n-1)th term in the fibonacci sequence.|
| **2. URL**         	| /?q={n}                                                                                                                     	|
| **Method**      	| GET                                                                                                                       	|
| **Description** 	| Returns the nth and (n-1)th term in the fibonacci sequence.|
| **3. URL**         	| /advice/                                                                                                                     	|
| **Method**      	| GET                                                                                                                       	|
| **Description** 	| Uses external API and returns an advice.  	|


You can access the live version [here](https://fiboapp.eu-gb.cf.appdomain.cloud/). 