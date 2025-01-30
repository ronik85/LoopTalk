import express from 'express'
// import userRouter from './routes/user.routes.js'
const app = express()


app.get('/hello/asas', (req, res) => {
    res.send('Matched: /hello/asas');
});

app.get('/hello', (req, res) => {
    res.send('Matched: /hello');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})