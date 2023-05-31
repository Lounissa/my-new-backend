const { default: mongoose } = require('mongoose');
const mongosse = require('mongoose');

const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString, {connectTimeoutMS:2000}).then(()=>{
    console.log ('connecté à mongodb')
})
.catch(error=>console.error(error));