# QuickScript - Outline

Data types (in order of increasing compelexity):
```
  Null
  Boolean
  Number
  String
  RegExp (@String)
  Array
  Object
  Context (@Object)
  Function
  Class (@Function)
```
* The `@` symbols refer to literals constructed with `@` before the literal of the named type.

Here are the various literals for each data type:

##### Null
`null`

##### Boolean
`true` or `false`

##### Number
Just the digits of any decimal or integer (can be with sign). Please note that no commas, spaces, etc. are allowed, just a maximum of one period, a maximum of one sign, and digits (and possibly an `e` for scientific notation).
E.g.:  `-1.38` or `1.05e3` are fine, but `13,423` and `569.111.394 0` are not.

##### String
`"[text]"` or `'[text]'`

##### RegExp
`@"[RegExp]"` or `@'[RegExp]'`
