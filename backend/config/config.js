module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.username, //
  },
  test: {
    db_name: "",
    db_user: "",
    db_pass: "",
    di_lect: "",
  },
  production: {
    db_name: "",
    db_user: "",
    db_pass: "",
    di_lect: "",
  },
};
