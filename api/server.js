/* 
 *Arquivo:server.js
 *Descrição: Este arquivo é responsável por toda a configuração e execução da aplicação
 *Data: 09/03/2024
 *Author: Matheus Moura
*/ 
const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação executando na porta ', port);
  });
