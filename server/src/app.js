const {ApolloServer} = require('apollo-server')
const typeDefs = require('./graphql/typeDefs')
const BreweriesAPI = require('./graphql/datasources/brewery')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            breweriesAPI: new BreweriesAPI()
        }
    },
    playground: {
        endpoint: '/graphql'
    }
})

server.listen(4000).then(({url}) => {
    console.log(`Server at ${url}`)
})