# object-id-joi-extension

A MongoDB ObjectId validator for [Joi](https://www.npmjs.com/package/joi).

## Usage

```js
const Joi = require('joi');
const ObjectIdExtension = require('object-id-joi-extension');

const joiWithObjectIdValidator =  Joi.extend(ObjectIdExtension);
```

```ts
import { extend } from 'joi'
import JoiObjectIdExtension from 'object-id-joi-extension'

export const joiWithObjectIdValidator = extend(JoiObjectIdExtension)
```
