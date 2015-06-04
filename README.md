# solid

Solid is a base style library. It will be used as the core styling for Buzzfeed products.

## Set Up

### Dependencies

[Node.js and NPM](https://docs.npmjs.com/getting-started/installing-node)

This installation guide assumes that you have the Buzzfeed webapp installed.

### Downloading the repo

Open a terminal window. Clone the repo into a new folder:

`git clone https://github.com/primer/primer.git /opt/buzzfeed/solid`

Move into that directory

`cd /opt/buzzfeed/solid`

### Build the app

Build Solid's dependencies

`make dev`

### Run locally

`make run`

Open the site in your web browser:

<http://localhost:9000/>

## Linting

We use scss lint to keep our scss clean and consistent.

To run scss_lint:

`scss-lint scss/`

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


To add documentation to a `<p>` in html with class `.type-1`

```
<pre>
    <code> <%= '<p class="type-1"> Yale Will Offer Its First Online Degree </p>' %> </code>
</pre>
```


To add documentation to the `$type-2` variable in css:

```
<pre>
    <code class="css"> <%= ".class { font-size: $type-1; }" %> </code>
</pre>
```


To add documentation to an `<h2>` in html, a `<p>` in html with class `.type-1`, and the `$type-1` variable in css all in the same `<pre>` tag: 

```
<pre>
    <code class="html"> <%= '<h1> Yale Will Offer Its First Online Degree </h1>' %> <br /> <%= '<p class="type-1"> Yale Will Offer Its First Online Degree </p>' %> </code>
    <code class="css"> <%= ".class { font-size: $type-1; }" %> </code>
</pre>
```
