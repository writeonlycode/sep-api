import{_ as s,c as a,o as n,a as e}from"./app.26a85adb.js";const C=JSON.parse('{"title":"Entries","description":"","frontmatter":{},"headers":[{"level":2,"title":"GET /api/v1/entries","slug":"get-api-v1-entries","link":"#get-api-v1-entries","children":[{"level":3,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":3,"title":"Example Requests","slug":"example-requests","link":"#example-requests","children":[]},{"level":3,"title":"Example Response","slug":"example-response","link":"#example-response","children":[]}]},{"level":2,"title":"GET /api/v1/entries/:entry","slug":"get-api-v1-entries-entry","link":"#get-api-v1-entries-entry","children":[{"level":3,"title":"Parameters","slug":"parameters-1","link":"#parameters-1","children":[]},{"level":3,"title":"Example Request","slug":"example-request","link":"#example-request","children":[]},{"level":3,"title":"Example Response","slug":"example-response-1","link":"#example-response-1","children":[]}]}],"relativePath":"reference/entries.md"}'),l={name:"reference/entries.md"},o=e(`<h1 id="entries" tabindex="-1">Entries <a class="header-anchor" href="#entries" aria-hidden="true">#</a></h1><h2 id="get-api-v1-entries" tabindex="-1"><code>GET</code> <code>/api/v1/entries</code> <a class="header-anchor" href="#get-api-v1-entries" aria-hidden="true">#</a></h2><p>Returns a list of entries.</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>title</code></td><td>Filter on the title of the entries.</td><td><code>string</code></td></tr><tr><td><code>author</code></td><td>Filter on the author of the entries.</td><td><code>string</code></td></tr><tr><td><code>sort</code></td><td>Comma separated list of fields to use for sort. Use <code>field_name</code> to sort in ascending order and <code>-field_name</code> to sort in descending order.</td><td><code>string</code></td></tr><tr><td><code>limit</code></td><td>Limits the number of results.</td><td><code>number</code></td></tr><tr><td><code>page</code></td><td>The page to be returned. The limit option must be present for this to work.</td><td><code>number</code></td></tr><tr><td><code>fields</code></td><td>Comma separated list of fields to show.</td><td><code>string</code></td></tr><tr><td><code>firstPublished</code></td><td>Can be a string like <code>firstPublished=2022-12-12</code> or a nested object like <code>firstPublished[$gt]=2022-12-12</code>.</td><td><code>string</code> or <code>object</code></td></tr><tr><td><code>lastUpdated</code></td><td>Can be a string like <code>lastUpdated=2022-12-12</code> or a nested object like <code>lastUpdated[$gt]=2022-12-12</code>.</td><td><code>string</code> or <code>object</code></td></tr></tbody></table><h3 id="example-requests" tabindex="-1">Example Requests <a class="header-anchor" href="#example-requests" aria-hidden="true">#</a></h3><p>All entries:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span></span>
<span class="line"></span></code></pre></div><p>All entries with title &quot;Abduction&quot;:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">title=Abduction</span></span>
<span class="line"></span></code></pre></div><p>All entries with author &quot;Douven, Igor&quot;:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">author=Douven,%20Igor</span></span>
<span class="line"></span></code></pre></div><p>All entries sorted by author in descending order:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">sort=author</span></span>
<span class="line"></span></code></pre></div><p>All entries sorted by author in ascending order:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">sort=-author</span></span>
<span class="line"></span></code></pre></div><p>The first 10 entries:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">limit=10</span></span>
<span class="line"></span></code></pre></div><p>The 3rd page, with 10 entries per page (i.e. skips the firs 20 entries entries and returns the next 10 entries):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">limit=10</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">page=3</span></span>
<span class="line"></span></code></pre></div><p>Returns only the field <code>title</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">fields=title</span></span>
<span class="line"></span></code></pre></div><p>All entries published on 2022-12-12:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">firstPublished=2022-12-12</span></span>
<span class="line"></span></code></pre></div><p>All entries published since 2022-12-12:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">firstPublished</span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">gte</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">=2022-12-12</span></span>
<span class="line"></span></code></pre></div><p>The possible operators are: <code>$gte</code> for greater than or equal, <code>$gt</code> for greater than, <code>$lte</code> for less than or equal, and <code>$lt</code> for less than.</p><p>All entries last updated on 2022-12-12:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">lastUpdated=2022-12-12</span></span>
<span class="line"></span></code></pre></div><p>All entries last updated since 2022-12-12:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">lastUpdated</span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">gte</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">=2022-12-12</span></span>
<span class="line"></span></code></pre></div><p>The possible operators are: <code>$gte</code> for greater than or equal, <code>$gt</code> for greater than, <code>$lte</code> for less than or equal, and <code>$lt</code> for less than.</p><h3 id="example-response" tabindex="-1">Example Response <a class="header-anchor" href="#example-response" aria-hidden="true">#</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">637c6e4aab7ffc771756ef2b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abduction</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Abduction</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Douven, Igor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">firstPublishedDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2011-03-09T00:00:00.000Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">lastUpdatedDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2021-05-18T00:00:00.000Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">preamble</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">In the philosophical literature, ...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">__v</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">637c6e4aab7ffc771756ef2c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abelard</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Peter Abelard</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">King, Peter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">firstPublishedDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2004-08-03T00:00:00.000Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">lastUpdatedDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2022-08-12T00:00:00.000Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">preamble</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Peter Abelard (1079\u201321 April 1142) ...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">__v</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="get-api-v1-entries-entry" tabindex="-1"><code>GET</code> <code>/api/v1/entries/:entry</code> <a class="header-anchor" href="#get-api-v1-entries-entry" aria-hidden="true">#</a></h2><p>Returns the entry with the given identifier.</p><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h3><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>:entry</code></td><td>The identifier of the entry to be returned.</td><td><code>string</code></td></tr></tbody></table><h3 id="example-request" tabindex="-1">Example Request <a class="header-anchor" href="#example-request" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">BASE_URL/api/v1/entries/abduction</span></span>
<span class="line"></span></code></pre></div><h3 id="example-response-1" tabindex="-1">Example Response <a class="header-anchor" href="#example-response-1" aria-hidden="true">#</a></h3><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">637c6e4aab7ffc771756ef2b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abduction</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Abduction</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Douven, Igor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">firstPublishedDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2011-03-09T00:00:00.000Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">lastUpdatedDate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2021-05-18T00:00:00.000Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">preamble</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">In the philosophical literature, ...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">__v</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,42),p=[o];function t(r,c,D,i,y,d){return n(),a("div",null,p)}const A=s(l,[["render",t]]);export{C as __pageData,A as default};