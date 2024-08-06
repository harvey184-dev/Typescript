import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import * as controller from './controller';

const app = express();

// Sử dụng body-parser để parse JSON requests
app.use(bodyParser.json());

// Sử dụng body-parser để parse form data
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

app.use('/route', router);

router.get('/', (request, response) => {
    response.send('Hello world Route with Nodemon 1!');
});

router.get('/users', controller.users);

router.post('/users/create', controller.create);
