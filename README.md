# Pragmateam code challenge server (NodeJS)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm run start` - Start the application (Port 8081)

- `npm run test` - Test the application

# Strategies:
1º - Frontend be simple as possible, not having logics, only showing the data to the user
2° - Code be simple to test

# Question:
If would be possible to have only one endpoint to get all the beers temperatures?

# Solution:
First of all, got rid off fontend doing mulple requests. Frontend makes only one request and the backend looks for the temperatures of each beer. But there is a problem, each request takes at least 2 seconds. 

# If I had more time:
I had some ideas to fix the problem told before, but it would take much time to implement it and test it. The idea was keeping in memory the temperatures plus the timestamp, if someone else request do backend in the next five seconds, intead search for all the beers again, the temperatures variable would be sent.
I had a second idea but would take a good time too. To use WebSockets, but each sensor should emit the updated temperature.
Also, the index.js would be tested but the code is not too complex. For every error that appears, the code continues the flow without compromising other beers.