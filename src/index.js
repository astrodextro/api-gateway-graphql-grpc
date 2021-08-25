const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const expressPlayground = require('graphql-playground-middleware-express')
  .default
const { buildSchema } = require('graphql')
const usersServiceClient = require("./users-service-client");
const defaultPlaygroundQueries = require("./playground-query")

// Create a server:
const app = express();

var schema = buildSchema(`
  type User {
    id: String
    name: String
  }
 
  type Query {
    user(id: String): User
    users: [User]
    hello: String
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);
  
var root = {

  hello: () => {
      return "Hello GraphQL"
  },
  users: () => {
    return new Promise((resolve, reject) => {
        usersServiceClient.getAll(null, (err, data) => {
            if (!err) {
                console.log(data);
                resolve(data.users)
            } else {
              console.log(err);
            }
        });
    });
  },
  rollDice: ({numDice, numSides}) => {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
};

// Use those to handle incoming requests:
app.use('/graphql', graphqlHTTP((req) => ({
    schema: schema,
    rootValue: root,
    // graphiql: true,
  })));

  app.get('/playground', expressPlayground({
    endpoint: '/graphql',
    subscriptionEndpoint: '/',
    settings: {
      'request.credentials': 'include'
    },
    tabs: [
      {
        name: 'API',
        endpoint: '/',
        // query: defaultPlaygroundQueries
      }
    ]
  }))

// Start the server:
app.listen(7000, () => console.log("Server started on port 7000"));