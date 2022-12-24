# Entries

## `GET` `/api/v1/entries`

Returns a list of entries.

### Parameters

| Parameter | Description                          | Type     |
| ---       | ---                                  | ---      |
| `title`   | Filter on the title of the entries.  | `string` |
| `author`  | Filter on the author of the entries. | `string` |
| `sort`    | Sort on given field.                 | `string` |

### Example Requests

All entries:

```bash
curl $BASE_URL/api/v1/entries/
```

All entries with title "Abduction":

```bash
curl $BASE_URL/api/v1/entries/?title=Abduction
```

All entries with author "Douven, Igor":

```bash
curl $BASE_URL/api/v1/entries/?author=Douven,%20Igor
```

All entries sorted by author in descending order:

```bash
curl $BASE_URL/api/v1/entries/?sort=author
```

All entries sorted by author in ascending order:

```bash
curl $BASE_URL/api/v1/entries/?sort=-author
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
