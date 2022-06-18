import express from 'express';

import { TOKEN, USER_ID, API_VERSION } from './src/Config/index';
import instagram from './src/Instagram/Instagram';
import Database from './src/Database/Database';
import Cron from './src/Cron/Cron';
import Api from './src/Api/index'


const app = express();
app.use(Api);

const PostCreator = {
    async init() {
        await Cron.init();
        await Database.init();
        const res = await Database.getAcount({ userId: "2147483647" });
        console.log (res);

        const ig = await instagram.fetchMedia("17841444932698968", res.long_token)
        console.log(ig);
        const post = await instagram.fetchIGPost(ig[0].id, res.long_token);
        console.log(post);
        
        app.listen(5000, () => console.log(`listening on port 5000`));
    }
};

PostCreator.init();
