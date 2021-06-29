const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

let books = [{id: "1", name: "BOOK1", genre: "GENRE1"}, 
            {id: "2", name: "BOOK2", genre: "GENRE2"}, 
            {id: "1", name: "BOOK3", genre: "GENRE3"}];

const BookType = new GraphQLObjectType({ 
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString }, 
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
 })

 const RootQuery = new GraphQLObjectType({
     name: 'RootQueryType',
     fields: {
         book: {
             type: BookType,
             arg: { id: { type: GraphQLString } },
             resolve(parent, args)      {
                 // code to get data from db
                 return _.find(books, { id: args.id });
             }
         }
     }
 });

module.exports = new GraphQLSchema({
    query: RootQuery    
});