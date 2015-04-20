# solid

This repo will collect all basic BuzzFeed styling CSS.

It is implemented in SASS/SCSS.

The harp webserver is used to display and develop the styling locally:

<http://harpjs.com/>

> The static web server with built-in preprocessing.

> Harp serves Jade, Markdown, EJS, CoffeeScript, Sass, LESS and Stylus as HTML, CSS & JavaScript—no configuration necessary.


## Dev

Install node dependencies (including **harp** and **sass**):

    npm install

Run the harp server locally:

    ./node_modules/.bin/harp server

Open the site in your web browser:

<http://localhost:9000/>


## Code Snippets

To add code snippets/highlighted syntax to pages in solid, wrap your html/css inside &lt;%= ' ' %&gt;

***Examples***

To add documentation to an h2 or a p with a class of .type-2 in html:

&lt;pre&gt; 
<br>    &lt;code class=&quot;html&quot;&gt; &lt;%= '&lt;h2&gt; Yale Will Offer Its First Online Degree &lt;/h2&gt;' %&gt; &lt;br /&gt; &lt;%= '&lt;p class=&quot;type-2&quot;&gt; Yale Will Offer Its First Online Degree &lt;/p&gt;' %&gt; 
<br>    &lt;/code&gt;
<br>&lt;/pre&gt;
<br>

To add documentation to the $type-2 variable in css:

<br>&lt;pre&gt; 
<br>    &lt;code class=&quot;css&quot;&gt; &lt;%= '.class { font-size: $type-2; }' %&gt; &lt;/code&gt;
<br>&lt;/pre&gt;


