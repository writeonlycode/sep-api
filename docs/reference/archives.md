# Archives

## `GET` `/api/v1/archives`

Returns the list of all archived editions.

### Example Request

```bash
curl $BASE_URL/api/v1/archives
```

### Example Response

```json
[
  {
    "_id": "63b267bf572104765ed556e1",
    "identifier": "win2022",
    "__v": 0,
    "title": "Winter 2022 Edition"
  },
  {
    "_id": "63b27204572104765edfa94d",
    "identifier": "fall2022",
    "__v": 0,
    "title": "Fall 2022 Edition"
  },
  ...
]
```

## `GET` `/api/v1/archives/:archive`

Returns the archive with the given identifier.

### Example Request

```bash
curl $BASE_URL/api/v1/archives/win2022
```

### Example Response

```json
{
  "_id": "63b267bf572104765ed556e1",
  "identifier": "win2022",
  "__v": 0,
  "title": "Winter 2022 Edition"
}
```

## `GET` `/api/v1/archives/:archive/entries`

Returns a list of entries from the archive with the given identifier.

### Parameters

| Parameter | Description                         | Type     |
| ---       | ---                                 | ---      |
| `:archive` | The identifier of the archive from which the entries are to be returned. | `string` |
| `title`   | Filter on the title of the entries. | `string` |
| `author`  | Filter on the author of the entries. | `string` |
| `sort`    | Comma separated list of fields to use for sort. Use `field_name` to sort in ascending order and `-field_name` to sort in descending order.  | `string` |
| `limit`   | Limits the number of results. | `number` |
| `page`    | The page to be returned. The limit option must be present for this to work. | `number` |
| `fields`  | Comma separated list of fields to show. | `string` |
| `firstPublished` | Can be a string like `firstPublished=2022-12-12` or a nested object like `firstPublished[$gt]=2022-12-12`. | `string` or `object` |
| `lastUpdated` | Can be a string like `lastUpdated=2022-12-12` or a nested object like `lastUpdated[$gt]=2022-12-12`. | `string` or `object` |

### Example Requests

The parameters work in the same way as in the `api/v1/entries` endpoint, the only
difference being that the entries returned are from the specified archive. To
retrieve, for example, all entries from the Winter 2022 Edition:

```bash
curl $BASE_URL/api/v1/archives/win2022/entries
```

### Example Response

```json
[
  {
    "_id": "637c6e4aab7ffc771756ef2b",
    "archive": "win2022",
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
    "archive": "win2022",
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

## `GET` `/api/v1/archives/:archive/entries/:entry`

Returns the entry with the given identifier from the archive with the given
identifier.

### Parameters

| Parameter     | Description                                 | Type     |
| ---           | ---                                         | ---      |
| `:archive` | The identifier of the archive from which the entry is to be returned. | `string` |
| `:entry` | The identifier of the entry to be returned. | `string` |

### Example Request

Returns the entry with the identifier `abduction` from the archive with the
identifier `win2022`.

```bash
curl $BASE_URL/api/v1/archives/win2022/entries/abduction
```

### Example Response

```json
{
  "_id": "637c6e4aab7ffc771756ef2b",
  "archive": "win2022",
  "identifier": "abduction",
  "title": "Abduction",
  "author": "Douven, Igor",
  "firstPublishedDate": "2011-03-09T00:00:00.000Z",
  "lastUpdatedDate": "2021-05-18T00:00:00.000Z",
  "preamble": "In the philosophical literature, ...",
  "__v": 0
}
```
