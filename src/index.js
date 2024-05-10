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
	  // Check if the request method is GET
	  if (request.method === 'GET') {
		// Define the URL of your origin server
		const originURL = 'https://bitcoin-mantra.com/';
  
		try {
		  // Fetch data from the origin server
		  const response = await fetch(originURL);
  
		  // Check if the response is successful (status code 200)
		  if (response.ok) {
			// Get the response body as text
			const responseBody = await response.text();
  
			// Set the Content-Type header to match the origin response
			const headers = {
			  'Content-Type': response.headers.get('Content-Type')
			};
  
			// Return the origin response with status code 200 OK
			return new Response(responseBody, {
			  status: 200,
			  headers: headers
			});
		  } else {
			// If the origin server returns an error status code, return the status code with an error message
			return new Response(`Error: ${response.status} ${response.statusText}`, {
			  status: response.status
			});
		  }
		} catch (error) {
		  // If an error occurs during the fetch operation, return an error message
		  return new Response('Error fetching data from origin server', {
			status: 500
		  });
		}
	  } else {
		// For other request methods, return the default response
		return new Response('Use GET request', {
		  status: 405
		});
	  }
	},
  };
  
  
