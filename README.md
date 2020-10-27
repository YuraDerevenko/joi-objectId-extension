# joi-objectId-extension

A MongoDB ObjectId validator for [Joi](https://www.npmjs.com/package/joi).

## Usage

```js
const Joi = require('joi');
const ObjectIdExtension = require('joi-objectid-extension');

const joiWithObjectIdValidator =  Joi.extend(ObjectIdExtension);
```
