//-------------------------XMLHttpRequest.js

// function getPostsXMLHttpRequest() {
// 	return new Promise(function(resolve, reject) {
// 		const request = new XMLHttpRequest();

// 		request.addEventListener('load', function() {
// 			if (this.status == 200) {
// 				let data = JSON.parse(this.responseText);

// 				resolve(data);
// 			}
// 		});

// 		request.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// 		request.send();
// 	});
// }


//-----------------------------axios.js

// let scriptAxios = document.createElement('script');

// scriptAxios.setAttribute('src', 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js');

// document.body.append(scriptAxios);

// function getPostsAxios() {
// 	return new Promise(function(resolve, reject) {
// 		axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
// 			resolve(response.data);
// 		}).catch(function (error) {
// 			reject(error);
// 		});
// 	});
// }

// function getPostsAxiosOriginal() {
// 	return axios.get('https://jsonplaceholder.typicode.com/posts');
// }

//----------------------------fetch.js

// function getPostsFetch() {
// 	return new Promise(function(resolve, reject) {
// 		fetch('https://jsonplaceholder.typicode.com/posts')
// 			.then(response => response.json())
// 			.then(data => resolve(data));
// 	});
// }

// function getPostsFetchOiriginal() {
// 	return fetch('https://jsonplaceholder.typicode.com/posts');
// }

//--------------------------jQuery.js

// let scriptJQuery = document.createElement('script');

// scriptJQuery.setAttribute('src', 'https://code.jquery.com/jquery-3.6.0.min.js');

// document.body.append(scriptJQuery);

// function getPostsJQuery() {
// 	return new Promise(function(resolve, reject) {
// 		jQuery.ajax({
// 			url: 'https://jsonplaceholder.typicode.com/posts',
// 			// dataType: 'json'
// 		}).done(function(response) {
// 			resolve(response);
// 		}).fail(function() {
// 			reject('error');
// 		});
// 	});
// }
