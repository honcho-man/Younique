const mongoose = require('mongoose');
const db = require('./env').get(process.env.NODE_ENV);
//mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);

mongoose.connect(db.SERVER_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('MongoDB has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
    console.log('MongoDB has reconnected')
})
mongoose.connection.on('error', error => {
    console.log('Mongo connection has an error', error)
    mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
    console.log('Mongo connection is disconnected')
})