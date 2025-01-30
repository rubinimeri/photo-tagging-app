import express from 'express';
import indexRouter from './routes/indexRouter.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));