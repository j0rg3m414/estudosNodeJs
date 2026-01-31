//Importar a biblioteca express
import express, { Request, Response } from 'express';

//Criar uma aplicação express
const app = express();

//Criar uma rota GET para o endpoint '/'
app.get("/", (req: Request, res: Response) => {
    res.send("Bem-vindo Jorge!");
});

//Iniciar o servidor na porta 8080
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080: http://localhost:8080');
});
