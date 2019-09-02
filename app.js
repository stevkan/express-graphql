import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose'

import schema from './graphql';

var app = express();

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true
})));

// Connect mongo database
mongoose.connect('mongodb+srv://sk_admin:Gurthang1%21@slk-cluster-0-fvkpd.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
  if (err) return console.log(err)
  // start server
  app.listen(4000, () => {
    console.log('Now browse to localhost:4000/graphql')
  });
})
