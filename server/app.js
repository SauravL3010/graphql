const express = require('express');
const { graphqlHTTP }= require('express-graphql');
const schema = require('./schema/schema');


const app = express();

app.use('/api', graphqlHTTP({ 
    schema: schema,
    graphiql: true,
 }))

const apiport = 4000
app.listen(apiport, ()=>{
    console.log('api port 4000');
})