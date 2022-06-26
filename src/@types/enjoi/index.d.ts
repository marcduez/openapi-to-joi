declare module "enjoi" {
  import Joi from "joi"
  import { OpenAPIV3 } from "openapi-types"

  export default {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    schema: (schemaObj: OpenAPIV3.SchemaObject) => Joi.AnySchema,
  }
}
