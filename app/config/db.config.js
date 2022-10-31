module.exports = {
  HOST: 'localhost',
  USER: 'thuongthanhto',
  PASSWORD: 'abcd1234',
  DB: 'bitcove',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
