# nossy-wiki

A node express server using a redis cache.

This server uses the wikipedia API to get details a title query parameter.

When a request is made, the server checks if the search term is available in the redis cache first. If it finds it in the cache it returns the existing data, otherwise it fetches the data from the wikipedia API and saves it to the cache before returning it.

Use `npm run server` to start the development server.

The redis server must be up before starting the server.

## Author

Oyekunle Oloyede
