# QuickScript - Outline

<!--- TODO: Add better type tree. --->
### Data types
Data types:
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

#### Data type literals

Here are the various literals/example literals for each data type:

##### Null
`null`

##### Boolean
`true` or `false`

##### Number
Just the digits of any decimal or integer (can be with sign). Please note that no commas, spaces, etc. are allowed, just a maximum of one period, a maximum of one sign, and digits (and possibly an `e` for scientific notation).
E.g.:  `-1.38` or `1.05e3` are fine, but `13,423` and `569.111.394 0` are not.

##### String
`"Text here"` or `'Text here'`
Note: New lines are not allowed in strings directly; use the escape sequence `\n` instead.

##### RegExp
`@"RegExp here"` or `@'RegExp here'`

##### Array
`[element0, element1, ...]`

##### Object
`[key1=value1, key3=value3, key2=value2, ...]` (empty: `[=]`)

##### Context
`@[key1=value1, key3=value3, key2=value2, ...]` (empty: `@[=]`)

##### Function
`{ codeHere }`

##### Class
`@{ codeHere }`

### Built-in Library
Please note that the built-in library is different from the standard library. The built-in library is always available - you don't have to import anything to use it.
The standard library contains more human-usable functions, and is often easier to use, but requires an `import` call (it is written via the built-in library).
