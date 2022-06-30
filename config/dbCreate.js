const mysql = require('mysql2/promise');
require('dotenv').config();

const { DATABASE_NAME } = process.env;

(async () => {
  try {
    const statement = `CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME}`;
    const db = await mysql.createConnection('mysql://root@localhost:3306');
    await db.execute(statement);
    console.log(`${DATABASE_NAME} created`);
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }  
})();