const mutations = require('../grahpql/mutation')
const resolvers = require('../grahpql/querys')

module.exports = {
 Query:resolvers,
 Mutation:mutations
}



