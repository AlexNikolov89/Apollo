module.exports = {
    Query: {
        breweries: async (parent, args, {dataSources})=> {
            try {
                const breweries = await dataSources.breweriesAPI.getAllBreweries()
                return breweries.map(brewery => ({
                    id:brewery.id,
                    name: brewery.name,
                    street: brewery.street
                }))
            } catch (error) {
                console.log(error)
            }
        },
        brewery: async (parent, {id}, {dataSources}) => {
            try {
                const brewery = await dataSources.breweriesAPI.getById(id)
                return {
                    id:brewery.id,
                    name: brewery.name,
                    street: brewery.street
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}