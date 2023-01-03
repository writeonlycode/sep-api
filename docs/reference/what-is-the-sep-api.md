# What is the SEP API?

The SEP API is an unofficial API for the [Stanford Encyclopedia of
Philosophy](https://plato.stanford.edu/). The official SEP website is scraped
periodically, and access its entries' contents is provided through a modern
RESTful API.

The current (and temporary) base URL for the API is:

- [https://s-xhpd.onrender.com/api/v1/](https://s-xhpd.onrender.com/api/v1/)

# Known Issues and Limitations

Currently, the SEP-API only goes back to the Fall of 2006 Edition in the
archives. Older editions in the archives have a different HTML structure that
the scraper still doesn't support.

Moreover, the current version of the SEP-API doesn't include the supplements
for the entries.

# Bugs, Features and Other Issues

If you find a bug, want a feature, or encountered any issue with the SEP-API,
feel free to open a ticket at
[https://github.com/writeonlycode/sep-api/issues](https://github.com/writeonlycode/sep-api/issues)!
