const {RESTDataSource} = require('apollo-datasource-rest')

class BreweriesAPI extends RESTDataSource{
    constructor(){
        super()
        this.baseURL = 'https://api.openbrewerydb.org'
    }

    async getAllBreweries() {
        return this.get('/breweries')
    }

    async getById(id) {
        return this.get(`/breweries/${id}`)
    }
}