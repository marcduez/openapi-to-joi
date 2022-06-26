import enjoi from "enjoi"
import { OpenAPIV3 } from "openapi-types"
import prettier from "prettier"
import SwaggerParser from "swagger-parser"
import joiSchemaToCode from "./joi-schema-to-code"

const TEMPLATE = `
/* eslint-disable */
/* prettier-ignore */
import Joi from "joi"

export const schemas = {
  parameters: {
    {OPERATION_SCHEMAS}
  },
  components: {
    {COMPONENT_SCHEMAS}
  }
}`

const httpMethods = Object.values(OpenAPIV3.HttpMethods) as string[]

const getOperationSchemas = (document: OpenAPIV3.Document) => {
  const allOperations = (
    Object.values(document.paths) as Record<string, OpenAPIV3.OperationObject>[]
  )
    .filter((it) => !!it)
    .reduce<OpenAPIV3.OperationObject[]>(
      (arr, path) => [
        ...arr,
        ...Object.entries(path)
          .filter(
            ([key, value]) =>
              httpMethods.includes(key) &&
              !!value.operationId &&
              !!value.parameters?.length
          )
          .map(([, value]) => value),
      ],
      []
    )

  return allOperations
    .map((operation) => {
      const parameters = (operation.parameters ??
        []) as OpenAPIV3.ParameterObject[]
      const parameterSchemas = parameters
        .filter((it) => !!it.schema)
        .map((parameter) => {
          const joiSchema = enjoi.schema(
            parameter.schema! as OpenAPIV3.SchemaObject
          )
          const parameterKey = JSON.stringify(parameter.name)
          const code = joiSchemaToCode(
            joiSchema,
            parameter.required === true ? "required" : "optional"
          )
          return `${parameterKey}: ${code}`
        })

      if (!parameterSchemas.length) {
        return null
      }

      const operationKey = JSON.stringify(operation.operationId!)
      return `${operationKey}: {${parameterSchemas.join(",")}}`
    })
    .filter((it) => it !== null)
    .join(",")
}

const getComponentSchemas = (document: OpenAPIV3.Document) =>
  Object.entries(document.components?.schemas ?? {})
    .map(([name, schema]) => {
      const joiSchema = enjoi.schema(schema as OpenAPIV3.SchemaObject)
      return `${JSON.stringify(name)}: ${joiSchemaToCode(joiSchema)}`
    })
    .join(",")

export default async (schemaPath: string, prettierConfigPath?: string) => {
  const document = (await new SwaggerParser().validate(schemaPath, {
    validate: { schema: false },
  })) as OpenAPIV3.Document

  const mergedTemplate = TEMPLATE.replace(
    "{OPERATION_SCHEMAS}",
    getOperationSchemas(document)
  ).replace("{COMPONENT_SCHEMAS}", getComponentSchemas(document))

  const prettierOptions = (prettierConfigPath
    ? await prettier.resolveConfig(prettierConfigPath)
    : null) ?? { parser: "typescript" }

  return prettier.format(mergedTemplate, prettierOptions)
}
