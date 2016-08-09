# Developing Solid
The Solid styleguide lets you view Solid along with all of its documentation.

## Dependencies

This guide assumes you have installed node and ruby.

## Downloading the repo

Open a terminal window. Clone the repo into a new folder:

`git clone git@github.com:buzzfeed/solid.git /opt/buzzfeed/solid`

Move into that directory

`cd /opt/buzzfeed/solid`

## Build the app

Build Solid's dependencies

`make dev`

## Run locally

`make run`

Open the site in your web browser:

<http://localhost:9000/>

## Code Snippets

To add code snippets/highlighted syntax to pages in solid, wrap your markup inside <%= ' ' %>
```
<pre>
    <code><%= 'markup here' %></code>
</pre>
```


**Examples**

To add documentation to an `<h2>` in html

```
<pre>
    <code> <%= '<h2> Sentence Here </h2>' %> </code>
</pre>
```


To add documentation to a `<p>` in html with class `.xs-text-1`

```
<pre>
    <code> <%= '<p class="xs-text-1"> Yale Will Offer Its First Online Degree </p>' %> </code>
</pre>
```


To add documentation to the `$text-2` variable in css:

```
<pre>
    <code class="css"> <%= ".class { font-size: $text-1; }" %> </code>
</pre>
```


To add documentation to an `<h2>` in html, a `<p>` in html with class `.xs-text-1`, and the `$text-1` variable in css all in the same `<pre>` tag:

```
<pre>
    <code class="html"> <%= '<h1> Yale Will Offer Its First Online Degree </h1>' %> <br /> <%= '<p class="xs-text-1"> Yale Will Offer Its First Online Degree </p>' %> </code>
    <code class="css"> <%= ".class { font-size: $text-1; }" %> </code>
</pre>
```
