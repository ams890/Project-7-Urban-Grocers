# Sprint 7 project
# PROJECT DESCRIPTION
This project contains tasks involving creating and running JavaScript tests on our choice of Urban Grocers API endpoints from the documentation. I've written 2 tests each for GET requests, POST requests, PUT requests and DELETE requests. 

These tests include the following for each Urban Grocers endpoint: 
    1) checking the response status code and 
    2) parsing the response and checking that the response body contains the expected data.

# TECHNOLOGIES USED
For this project we've used the following technologies:
    - GitHub - to set up and copy the repository, and commit changes
    - Visual Code Studio - to write the JavaScript tests, run them in the Terminal emulator and evaluate the results
    - Tripleten's remote server for Urban Grocers - to connect the API endpoints for running our tests
    - Urban Grocers apiDOCS - for reference material for our tests, and the source of truth for verifying our response bodies contain the correct status codes and/or expected data

# TECHNIQUES USED
I used the npx jest testing framework to unit test the various Urban Grocers API endpoints. For the tests involving checking the response status codes, I used the expect method to compare the expected and actual response status codes across all four endpoints, using the apiDOCS for reference. 

For the tests involving parsing the responses and checking if the response body contained the expected data, each test was slightly different depending on the endpoint being tested. 
    - GET (/api/v1/warehouses):For this endpoint, we are getting a list of warehouses. We expect the response body to return a list of warehouses, so I wrote an expect function that would verify if the response data's length would be greater than zero. I defined the variable const data and tested that the data.length would be greater than zero by using .toBeGreaterThan. 

    - POST (/api/v1/kits): This endpoint is for creating a kit. First I wrote the request body to include the parameter of kit "name", and gave the kit "name" a value of "Example Kit". The parameter cardId is listed as optional in the requirements, so I left it out. In the test, I wanted to verify the kit "Example kit" had been created, so I again used the expect method to compare the expected and actual results of the response body, which should contain the "name" "Example kit", and since the "cardId" wasn't included, it at least shouldn't be "null", all using the .toBe operator.

    - PUT (/api/v1/kits/:id): This endpoint is for changing a kit. I passed the kit id of an existing kit through the URL (in this case, I chose id=5). The kit with id=5 is currently named "Pasta" in the documentation. I wanted to see if we could change an existing kit's (Pasta) name successfully, so I passed that through the request body per the apiDOCS. I defined the variable "data" and checked the expected and actual result by comparing the data.name and response.name using the expect method. 

    - DELETE (/api/v1/kits/:id): Lastly, this endpoint is used to delete a kit. I passed an existing kit id (id=7) through the URL. In our first test for this endpoint, I ran the test to delete the kit with id=7, and so for this second test I wanted to confirm the deletion by trying to delete it again. I'd expect a 404 not found error since you cannot delete an already deleted kit, but the actual result containt a 200 response status code, so there might be a bug here. 

# TESTING INSTRUCTIONS
Follow these steps to run each test.

Pre-conditions:
    - Start the server to make sure it is active
    - Copy/paste the server URL in the config.js file

1) In Visual Studio code, open a new Terminal window
2) In terminal, navigate to the correct folder by typing the command and pressing Return:
    cd hm07-qa-us
3) To run the tests, type the following command and pressing Return:
    npx jest


