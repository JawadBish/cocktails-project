import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import cocktailRoutes from './routes/cocktails.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/cocktails', cocktailRoutes)
/*
- goto https://www.mongodb.com/cloud/atlas -> Signin -> create a Cluster 
- Database Access -> create new database -> create Password Authentication
- Network Access -> add IP adress -> add current Ip adrress.
- Connect cluster -> connect your application -> then copy connection string to CONNECTION_URL in .env file.
*/

const CONNECTION_URL = 'mongodb+srv://jawadbisharat:Nazareth2020@cluster0.wq5f9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT1 = (process.env.PORT || 5000);


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(PORT1, () => console.log(`SERVER running on port: ${PORT1}`)))
    .catch((err) => console.log(err));

