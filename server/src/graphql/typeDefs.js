const { gql } = require("apollo-server-core");

module.exports = gql `
    type Query {
        breweries: [Brewery]
        brewery(id:ID): Brewery
    }
    type Brewery {
        id: ID!
        name: String
        street: String
    }
`