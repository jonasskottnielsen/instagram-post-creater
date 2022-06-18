import axios from 'axios';
import { API_VERSION, TOKEN, USER_ID } from '../Config';

const Media = {
	/**
	 * Fetch the latest 25 media posts from the specified instagram profile.
	 * @param {api_version} - The desired api version 
	 * @param {user_id} - The user id of the desired instagram profile
	 * @param {access_token} - The generated access-token for the user id
	 *
	 * @returns {object} - Returns object that contains an array of media objects 
	 */

	async fetchMedia(user_id, access_token) {
		let res = null;
		var config = {
			method: 'get',
			url: `https://graph.instagram.com/v12.0/${user_id}?access_token=${access_token}&fields=id, media_count,username,account_type, media`,
			headers: {}
		};

		await axios(config)
			.then(function (response) {
				res = response.data.media.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		return res;
	},

	/**
	 * Fetch all information of a specific instagram post.
	 * @param {mediaId} - The id for the media post that needs to be fetched  
	 * @param {access_token} - The generated access-token for the user id
	 *
	 * @returns {object} - Returns object that contains information for the specific mediaId.
	 */

	 async fetchIGPost(mediaId, access_token,) {

		let res = null;
		var config = {
			method: 'get',
			url: `https://graph.instagram.com/${mediaId}?access_token=${access_token}&fields=media_url, permalink, timestamp, caption`,
			headers: {}
		};

		await axios(config)
			.then(function (response) {
				res = response.data;
			})
			.catch(function (error) {
				console.log(error);
			});

		return res;
	},

	async refreshToken(access_token){
		var config = {
			method: 'get',
			url: 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={long-lived-access-token}',
			headers: { }
		  };
		  
		  axios(config)
		  .then(function (response) {
			console.log(JSON.stringify(response.data));
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	},

	async createLongLivedToken(){
		var config = {
			method: 'get',
			url: 'https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=8944aa8afb828689d16526c43e54cc45&access_token=IGQVJVTlBvaFBPVnl6clNtUWRNeVVpdDNtSml3NTYybmZAwZAk4zWE8wZA0R0NDZArU1Vwdy1MRlVROC1LQUxsQkJ5WW5VREN1S0JlazVzYm9pd204azhmdW5MRDY4V2o0OW81TlAtaENzbzBuNWpYZADR5eTNDTDk3bUx4bHFF',
			headers: { }
		  };
		  
		  axios(config)
		  .then(function (response) {
			console.log(JSON.stringify(response.data));
		  })
		  .catch(function (error) {
			console.log(error);
		  });
		  
	},

	
}
export default Media


