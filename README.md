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

**Examples**

To add documentation to an h2 or a p with a class of .type-2 in html:

&lt;pre&gt;&nbsp;
<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;code&nbsp;class=&quot;html&quot;&gt;&nbsp;&lt;%=&nbsp;'&lt;h2&gt;&nbsp;Yale&nbsp;Will&nbsp;Offer&nbsp;Its&nbsp;First&nbsp;Online&nbsp;Degree&nbsp;&lt;/h2&gt;'&nbsp;%&gt;'&nbsp;&lt;/code&gt;
<br>&lt;/pre&gt;

To add documentation to the $type-2 variable in css:

&lt;pre&gt;&nbsp;
<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;code&nbsp;class=&quot;css&quot;&gt;&nbsp;&lt;%=&nbsp;'.class&nbsp;{&nbsp;font-size:&nbsp;$type-2;&nbsp;}'&nbsp;%&gt;&nbsp;&lt;/code&gt;
<br>&lt;/pre&gt;

