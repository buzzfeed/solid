# Developing Solid
The Solid styleguide lets you view Solid along with all of its documentation. This guide assumes you have installed node and ruby.

### Build the app
Build Solid's dependencies: `make dev`

### Run locally

First: `make run`

Then open the site in your web browser:

<http://localhost:9000/>

## Code Style Tips

### Deprecating Code

To deprecate SCSS, move the old classes to the very bottom of the SCSS file. Use this comment to indicate when the deprecated SCSS will be removed:

````
// @TODO remove in version X
// -------------------------
.deprecated-class {
    color: #000;
}
````

### Code Snippets

To add code snippets/highlighted syntax to pages in solid, wrap your markup inside <%= ' ' %>
```
<pre>
    <code><%= 'markup here' %></code>
</pre>
```
