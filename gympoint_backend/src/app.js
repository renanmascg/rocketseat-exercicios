import express from 'express';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json()); // reconhece o formato json
  }

  routes() {
    this.server.use();
  }

}

export default new App().server;
