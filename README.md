# SEP API

This is an unofficial API for the [Stanford Encyclopedia of
Philosophy](https://plato.stanford.edu/). The official SEP website is scraped
periodically, and access the entries' contents are provided through a modern
RESTful API.

## How to Use

The current (and temporary) URL for the API is:

[https://sep-api-production.up.railway.app/api/v1/](https://sep-api-production.up.railway.app/api/v1/)

## Endpoints

### `GET https://sep-api-production.up.railway.app/api/v1/entries`

Returns a list with all the entries in the database.

### `GET https://sep-api-production.up.railway.app/api/v1/entries/identifier`

Returns the entry with the given identifier.
