import express from "express";
import sequelizeConfig from "./config/db";
import dotenv from "dotenv";
import Routes from "./routes/router";
import runSeeders from "./seeders/seeder";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/api', Routes);

const startServer = async () =>{
    try{
        await sequelizeConfig.authenticate();
        console.log("Connection to database established");
        await sequelizeConfig.sync({force:true}); // Recreates tables every time the server is started
        // await sequelizeConfig.sync({alter:true}); // Alter tables instead of dropping them
        // await sequelizeConfig.sync();

        await runSeeders();

        app.listen(PORT, () => {
            console.log(`\nServer running on port ${PORT}\n`);
        })
    }catch(error){
        console.log(`\nError connecting to the database: ${error}\n`)
    }
}

startServer();