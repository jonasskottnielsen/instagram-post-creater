import fs from 'fs';

import axios from 'axios';
import cron from 'node-cron';

const Cron = {

	/**
	 * Schedule all cron jobs. This is running upon the node application start up
	 * Tip: Use https://crontab.guru for easier configuration of cron jobs
	 */
	async init() {
		console.log('init cron jobs!');
		// Update the structure once every week a few hours before the files are downloaded.
		//cron.schedule('1 1 * * 6', () => this.updateStructure());
		// update a new cadformat every 2nd hour
		//cron.schedule('5 */2 * * *', () => this.scheduleUpdater());
	},
}

export default Cron
