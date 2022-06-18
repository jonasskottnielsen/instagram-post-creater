import mysql from 'mysql';
import util from 'util';

import { DB_HOST, DB_USERNAME, DB_NAME, DB_PASSWORD, USER_ID, TOKEN } from '../Config/index';

const pool = mysql.createPool({
	connectionLimit: 10,
	host: DB_HOST,
	user: DB_USERNAME,
	password: DB_PASSWORD,
	database: DB_NAME
});

const runQuery = util.promisify(pool.query).bind(pool);

const Database = {
	async insertAccount(data) {
		let result = null;
		try {
			result = await runQuery(`INSERT INTO accounts(long_token, account_name, account_id) VALUES (?,?,?)`, [data.token, data.name, data.userId]);
		} catch (error) {
			//Logger.logSqlError({ queryName: 'accounts', error: error });
			console.log(error);
		}
		return result;
	},

	async getAccounts() {
		let result = null;
		try {
			result = await runQuery('SELECT * FROM accounts');
		} catch (error) {
			//Logger.logSqlError({ queryName: 'accounts', error: error });
			console.log(error);
		}
		return result;
	},

	async getAcount(data) {
		let result = null;
		try {
			result = await runQuery('SELECT * FROM accounts WHERE account_id=?', data.userId);
		} catch (error) {
			//Logger.logSqlError({ queryName: 'accounts', error: error });
			console.log(error);
		}
		return result[0];
	},
	/**
	 * for creating a new DB during development.
	 */
	async init() {
		try {
			await runQuery('drop table if exists accounts')

			await runQuery('create table if not exists accounts(id int primary key, long_token TEXT NOT NULL, account_name VARCHAR(50), account_id int)');
			await runQuery(`insert into accounts(long_token, account_name, account_id) VALUES ("${TOKEN}","jonas", ${USER_ID})`);
		} catch (error) {
			//Logger.logSqlError({ queryName: 'INIT', error: error });
			console.log(error);
		}
	}
};

export default Database
