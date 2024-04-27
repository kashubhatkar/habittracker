const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');


mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://bhatkarkahkasha:RBF38k7DJ8sVrhjw@cluster0.p0xtbsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log(`Successfully Connected to Mongodb`);
    }).catch((e) => {
        console.log("Unable to Connect to Mongodb ", e);
    })
