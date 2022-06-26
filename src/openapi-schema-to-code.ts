import enjoi from "enjoi"
import { OpenAPIV3 } from "openapi-types"
import prettier from "prettier"
import SwaggerParser from "swagger-parser"
import joiSchemaToCode from "./joi-schema-to-code"

const TEMPLATE = `
/* eslint-disable */
/* prettier-ignore */
import Joi from "joi"

export const components = {
$COMPONENT_SCHEMAS$
}`

export default async (schemaPath: string) => {
  const document: OpenAPIV3.Document = await (SwaggerParser as any).validate(
    schemaPath,
    { continueOnError: false }
  )

  const componentSchemas = Object.entries(document.components?.schemas ?? {})
    .map(([name, schema]) => {
      const joiSchema = enjoi.schema(schema as OpenAPIV3.SchemaObject)
      return `${JSON.stringify(name)}: ${joiSchemaToCode(joiSchema)}`
    })
    .join(",")

  return prettier.format(
    TEMPLATE.replace("$COMPONENT_SCHEMAS$", componentSchemas),
    { parser: "typescript" }
  )
}
