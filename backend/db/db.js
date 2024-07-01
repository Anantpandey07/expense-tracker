const mongoose = require('mongoose')

const db = async () =>{
    try {
        mongoose.set('strictQuery', false) //  ensures that values passed to our model constructor that were not specified in our schema do not get saved to the db
        await mongoose.connect(process.env.MONGO)
        console.log('MongoDb is connected')
    } catch (error) {
        console.log('DB connection err')
    }
}

module.exports = {db};