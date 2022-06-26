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
  }).argv as unknown as { _: string[]; output: string }

const run = async () => {
  const schemaPath = argv._[0]
  const { output: outputPath } = argv

  // TODO: Resolve glob into multiple paths

  const generatedCode = await openapiSchemaToCode(schemaPath)
  await fs.promises.writeFile(outputPath, generatedCode, "utf-8")
  console.log(`File created: ${outputPath}`)
}

run().catch((e) => console.error(e))
