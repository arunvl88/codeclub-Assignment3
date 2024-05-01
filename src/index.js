/**
 * Let’s use an API and a Lookup Table to make things more interesting, and a return 1 of 4 Random Responses  to each GET request.
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
	  if (request.method === 'GET') {
		// Define key value pairs
		const randomMessage = {
			1: "Hola 1",
			2: "Hola 2",
			3: "Hola 3",
			4: "Hola 4",
		  };

		const max = 4;
		
		const random_number = Math.floor(Math.random() * max) + 1;

		const OUTPUT = { Message: randomMessage[random_number]};

		// Set the Content-Type header to application/json
		const headers = {
			'Content-Type': 'application/json'
		};

		// Return a JSON response with status code 200 OK
		return new Response(JSON.stringify(OUTPUT), {
		  status: 200,
		  headers: headers
		});
	  } else {
		// For other request methods, return the default response
		return new Response('Use GET request');
	  }
	},
  };
  
