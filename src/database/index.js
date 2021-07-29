const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://brunnoborges:409603@cluster0.iyzix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true});
mongoose.Promise = global.Promise;


module.exports = mongoose;