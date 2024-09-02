import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path: "./env"
})

connectDB()
    .then((result) => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at ${process.env.PORT}`)
        })
    }).catch((err) => {
        console.log("MongoDB Connection Failed !!!", err);
    });























// import express from "express";

// const app = express();


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("Connected to MongoDB");
//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error: " + error);
//         throw error;
//     }
// })()