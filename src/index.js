/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
	  // Check if the request method is POST
	  if (request.method === 'POST') {
		// Get the request headers
		const requestHeaders = {};
		request.headers.forEach((value, key) => {
		  requestHeaders[key] = value;
		});
  
		// Define the JSON response body with the request headers
		const responseBody = {
		  message: 'Hello World!',
		  method: 'POST',
		  headers: requestHeaders
		};
  
		// Set the Content-Type header to application/json
		const headers = {
		  'Content-Type': 'application/json'
		};
  
		// Return a JSON response with status code 200 OK
		return new Response(JSON.stringify(responseBody), {
		  status: 200,
		  headers: headers
		});
	  } else {
		// For other request methods, return the default response
		return new Response('Hello World!');
	  }
	},
  };
  
