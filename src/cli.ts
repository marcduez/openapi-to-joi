#!/usr/bin/env node
/* eslint-disable no-console */
import fs from "fs"
import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import openapiSchemaToCode from "./openapi-schema-to-code"

const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 <path> [options]")
  .showHelpOnFail(false)

  // Demand path
  .demandCommand(1)

  .option("o", {
    alias: "output",
    demandOption: true,
    describe: "The output file or directory",
    type: "string",
  })

  .option("prettier-config", {
    describe: "The path to your custom Prettier configuration",
    type: "string",
  }).argv as unknown as { _: string[]; output: string; prettierConfig?: string }

const run = async () => {
  const schemaPath = argv._[0]
  const { output, prettierConfig } = argv

  // TODO: Allow glob source, resolve to paths, and require output to be directory, with one output file per input file.

  const generatedCode = await openapiSchemaToCode(schemaPath, prettierConfig)
  await fs.promises.writeFile(output, generatedCode, "utf-8")
  console.log(`File created: ${output}`)
}

run().catch((e) => console.error(e))
