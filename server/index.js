require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const TempModel = require("./schema/tempSchema")
const cors = require("cors")
const router = express.Router()
//port
const port = 8080



//Requiring models
require("./schema/tempSchema")

app.use(express.json())
app.use(cors())

//Requiring routes
app.use(require("./routes/insertData"))



// async function InsertData() {
//     try {
//         await TempModel.insertMany([{
//             text: "Hello",
//             option_a: "a",
//             option_b: "b",
//             option_c: "c",
//             option_d: "d",
//             correct_option: "option_c"
//         }])
//         // const newData = new TempModel({

//         //     text: "Hello",
//         //     option_a: "a",
//         //     option_b: "b",
//         //     option_c: "c",
//         //     option_d: "d",
//         //     correct_option: "option_b"

//         // })
//         // newData.save()
//     } catch (error) {
//         console.log(error);
//         console.log("error while inserting data in db");
//     }

// }


//DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected!'))
    .catch(err => console.log("error while connecting with db", err))

app.listen(port, () => {
    console.log(`App is listening to PORT ${port}`);
})

