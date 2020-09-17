//import schema from './schema/schema';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

//const app = express();

//allow cros-origing requeste
let app = express();
app.use(cors({}));

//db.createUser({user: "jacob", pwd: "Manitra586", roles: [{role: "clusterAdmin", db: "quatre_heur"}]})

mongoose.connect('mongodb://jacob:Manitra586@localhost:27017/quatre_heur', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', () => {
	console.log('Connected to Database');
});

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('Now listening for requests on port 4000');
});
