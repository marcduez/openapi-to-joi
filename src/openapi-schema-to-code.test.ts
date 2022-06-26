import path from "path"
import openapiSchemaToCode from "./openapi-schema-to-code"

describe("openapiSchemaToCode", () => {
  it("creates expected file", async () => {
    const actual = await openapiSchemaToCode(
      path.join(__dirname, "fixtures", "example1.json")
    )

    expect(actual).toMatchSnapshot()
  })
})
