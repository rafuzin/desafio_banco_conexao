import express from 'express';
import equipamentoRoutes from './src/routes/equipamento.routes.js';

const app = express();

app.use(express.json());

app.use(equipamentoRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});