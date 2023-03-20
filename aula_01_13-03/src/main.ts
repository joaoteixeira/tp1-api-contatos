import express from 'express';
import router from './router';

const app = express();
const port = 3000;

app.use(express.json())
app.use(router);

app.listen(port, function() {
    console.log(`API up na port:${port}`);
});