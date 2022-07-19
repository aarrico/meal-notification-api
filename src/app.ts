import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: 'Hello!'});
});

try {
    app.listen(process.env.PORT, () => {
        console.log(`Sever running on ${process.env.PORT}`);
    });
} catch (error) {
    console.log(error)
}