import {app} from './app';
import { env } from './config/env';
import mongoose from 'mongoose';

async function bootstrap() {
    try{
        await mongoose.connect(env.mongoURI);
        console.log('Connected to MongoDB');
        app.listen(env.port, () => {
            console.log(`Server is running on port http://localhost:${env.port}`);
        });
    }
    catch(err){
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }

}
bootstrap();