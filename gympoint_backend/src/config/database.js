module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    timestamps: true, // criação de uma coluna com created at e updated at em cada tabela do bd
    underscored: true, // forçar o formato dos nomes das  tabelas UserGroup => user_groups
    underscoredAll: true, // forçar o formato do nome das colunas (idem exemplo acima)
  },
};
