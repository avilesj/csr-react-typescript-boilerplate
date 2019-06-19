import path from  "path";
import fs from  "fs";
import express, { Response, Request } from  "express";

const PORT = 8080;
const app = express();
const router = express.Router();

router.use(
  express.static(path.resolve(__dirname, "..", "dist", "web"), { maxAge: "30d" })
);

app.use(router);
app.get('/', function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, 'resources', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Boilerplate is running on ${PORT}`)
})

