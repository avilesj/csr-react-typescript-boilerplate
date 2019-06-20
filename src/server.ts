import dotenv from 'dotenv';
import path from 'path';
import express, { Response, Request } from 'express';
dotenv.config();

const PORT = process.env.PORT || 8080;
const APPNAME = process.env.APP_NAME || 'Boilerplate';
const app = express();
const router = express.Router();

router.use(
    express.static(path.resolve(__dirname, '..', 'dist', 'web'), { maxAge: '30d' })
);

app.use(router);
app.get('/', function (req: Request, res: Response) {
    res.sendFile(path.join(__dirname, '..', 'src', 'resources', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`${APPNAME} is running on ${PORT}`);
});
