import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose'

import schema from './graphql';

var app = express();

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// GraphqQL server route
app.use('/graphql', cors(corsOptions), graphqlHTTP(req => ({
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
