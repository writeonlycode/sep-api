# Entries

## `GET` `/api/v1/entries`

Returns a list with all the entries in the database.

### Parameters

- name: description

### Example Request

```bash
curl $BASE_URL/api/v1/entries/
```

### Example Response

```json
[
  {
    "_id": "637c6e4aab7ffc771756ef2b",
    "identifier": "abduction",
    "title": "Abduction",
    "author": "Douven, Igor",
    "firstPublishedDate": "2011-03-09T00:00:00.000Z",
    "lastUpdatedDate": "2021-05-18T00:00:00.000Z",
    "preamble": "In the philosophical literature, ...",
    "__v": 0
  },
  {
    "_id": "637c6e4aab7ffc771756ef2c",
    "identifier": "abelard",
    "title": "Peter Abelard",
    "author": "King, Peter",
    "firstPublishedDate": "2004-08-03T00:00:00.000Z",
    "lastUpdatedDate": "2022-08-12T00:00:00.000Z",
    "preamble": "Peter Abelard (1079–21 April 1142) ...",
    "__v": 0
  }, 
  ...
]
```

## `GET` `/api/v1/entries/:identifier`

Returns the entry with the given identifier.

### Parameters

- `identifier`: The identifier of the entry to be returned.

### Example Request

```bash
curl https://sep-api-production.up.railway.app/api/v1/entries/abduction
```

### Example Response

```json
{
  "_id": "637c6e4aab7ffc771756ef2b",
  "identifier": "abduction",
  "title": "Abduction",
  "author": "Douven, Igor",
  "firstPublishedDate": "2011-03-09T00:00:00.000Z",
  "lastUpdatedDate": "2021-05-18T00:00:00.000Z",
  "preamble": "In the philosophical literature, ...",
  "__v": 0
}
```
