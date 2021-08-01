const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://brunnoborges:409603@cluster0.iyzix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true});
// mongoose.connect('mongodb+srv://brunnoborges:409603@cluster0.iyzix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
//     { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true}).then(() => {
//         console,log('Conexão com mongoDB realizada com sucesso');
//     }).catch(() => {
//         console,log('Erro: Conexão com mongoDB não foi realizada');
//     });
mongoose.Promise = global.Promise;


module.exports = mongoose;