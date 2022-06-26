# openapi-to-joi

<span class="badge-npmversion"><a href="https://npmjs.org/package/@marcduez/openapi-to-joi" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@marcduez/openapi-to-joi.svg" alt="NPM version" /></a></span>

## Installation

```sh
$ npm install @marcduez/openapi-to-joi

$ yarn add @marcduez/openapi-to-joi
```

## General Usage

Generates a file with Joi schemas from an OpenAPI 3 document.

For example, starting with this document:

```json
{
  "openapi": "3.0.0",
  ...
  "paths": {
    "/": {
      "get": {
        "operationId": "operation1",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "minLength": 5
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200 Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Operation1Response"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Operation1Response": {
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "format": "email"
          },
          "age": {
            "type": "integer",
            "format": "int32",
            "minimum": 18,
            "maximum": 99
          }
        }
      }
    }
  }
}
```

And running this command:

```sh
$ openapi-to-joi openapi.json --output generated.ts
```

Produces this `generated.ts`:

```typescript
/* eslint-disable */
/* prettier-ignore */
import Joi from "joi"

export const schemas = {
  parameters: {
    operation1: { id: Joi.string().required().min(5) },
  },
  components: {
    Operation1Response: Joi.object({
      email: Joi.string().email({}),
      age: Joi.number().integer().max(99).min(18),
    }).unknown(),
  },
}
```

### Using the CLI

To view usage instructions for the CLI, use the `--help` command:

```sh
$ npm run openapi-to-joi --help

$ yarn openapi-to-joi --help
```
