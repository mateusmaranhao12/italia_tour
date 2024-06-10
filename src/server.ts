//servidor

import express from 'express'
import bodyParser from 'body-parser'
import tourRoutes from './routes/tourRoutes'

const app = express()
const port = 3000

// Middleware para configurar CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Corrigido para string 'true'
    next();
});

app.use(bodyParser.json())

app.use('/api', tourRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
