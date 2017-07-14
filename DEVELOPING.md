# Developing Solid

### Deprecating Code

To deprecate SCSS, move the old classes to the very bottom of the SCSS file. Use this comment to indicate when the deprecated SCSS will be removed:

````
// @TODO remove in version X
// -------------------------
.deprecated-class {
    color: #000;
}
````
