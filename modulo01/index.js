const express = require('express');

const server = express();

const projetos = [];
let chamadas_api = 0;

server.use(express.json());

//construção dos MiddleWare
// Middleware Global
function logHowManyRequisition(req, res, next){
  chamadas_api += 1;
  console.log(chamadas_api);

  next();
}

//Middleware Local
function checkIdExists(req, res, next) {
  const { id } = req.params;
  let existId = false;

  const projIndex = projetos.findIndex(proj => proj.id === id);

  if (projIndex === -1) {
    return res.status(400).json({ message: "Project do not exists!" });
  } 

  req.projIndex = projIndex;

  return next();
}

server.use(logHowManyRequisition);

// construção do CRUD da aplicação
server.post('/projects', (req, res) => {
    const { id, title } = req.body;
    const projeto = {
      id,
      title,
      tasks: []
    };

    projetos.push(projeto);

    return res.status(201).json(projetos);

});

server.get('/projects', (req, res) => {
  return res.json(projetos);
});

server.put('/projects/:id', checkIdExists, (req, res) => {
  const { title } = req.body;

  projetos[req.projIndex].title = title;

  return res.json(projetos);

});

server.delete('/projects/:id', checkIdExists, (req, res) => {
  
  projetos.splice(req.projIndex, 1);

  return res.json(projetos);

});

server.post('/projects/:id/tasks', checkIdExists, (req, res) => {
  const { title } = req.body;

  projetos[req.projIndex].tasks.push(title);

  return res.json(projetos);

});

server.listen(3000);