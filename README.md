This a sample API gateway with GraphQL and gRPC implemented
Calls from clients (web, postmn) are done with GraphQL
Calls to microservices (User service) are done with gRPC

To test run
npm i
npm start

Make calls from Postman (using GraphQL request type)
To run from browser visit: localhost:7000/graphql and run the request
Sample requests:

//Users (GRPC)
{
  users {
    id
    name
  }
}

// Hello (GraphQL test)
{
    hello
}

// Roll Dice (GraphQL test)
{
  rollDice(numDice: 3, numSides:6)
}