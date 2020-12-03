```js
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
//Test
var el = document.createElement("span");
el.innerHTML = "test";
var div = document.getElementById("foo");
insertAfter(div, el);
```
