const mongoose = require("mongoose")

const dbConnect = async () => {

    await mongoose.connect("mongodb+srv://namasvi:12345@namasvi.30gihvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Connected to the db");
}

module.exports=dbConnect