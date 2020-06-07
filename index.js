require('dotenv').config()
const express = require('express');
const app = express();
const grahpMidelware = require('express-graphql');

const {makeExecutableSchema} =  require('graphql-tools')
const resolvers = require('./grahpql/resolvers');
const {readFileSync} = require('fs')
const {join} = require('path')

const typeDefs=  readFileSync(
    join(__dirname,'lib','schema.graphql'),'UTF-8'
  )
  
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
}) 
app.use('/api',grahpMidelware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}))

app.listen(8080,()=>{
  console.log(`server online in http://localhost:8080/api`);
  
})
