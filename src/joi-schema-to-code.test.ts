import Joi from "joi"
import joiSchemaToCode from "./joi-schema-to-code"

describe("joiSchemaToCode()", () => {
  describe("any schema", () => {
    describe("allow()", () => {
      it.each([
        [Joi.any().allow(), "Joi.any()"],
        [Joi.any().valid(), "Joi.any()"],
        [Joi.any().allow("allow1"), 'Joi.any().allow("allow1")'],
        [
          Joi.any().allow("allow1", "allow2"),
          'Joi.any().allow("allow1","allow2")',
        ],
        [Joi.any().allow(3), "Joi.any().allow(3)"],
        [Joi.any().allow(3, 4), "Joi.any().allow(3,4)"],
        [Joi.any().valid("valid1"), 'Joi.any().allow("valid1").only()'],
        [
          Joi.any().valid("valid1", "valid2"),
          'Joi.any().allow("valid1","valid2").only()',
        ],
        [Joi.any().valid(3), "Joi.any().allow(3).only()"],
        [Joi.any().valid(3, 4), "Joi.any().allow(3,4).only()"],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("default()", () => {
      it.each([[Joi.any().default("default"), 'Joi.any().default("default")']])(
        "returns expected value",
        (schema, expected) => {
          expect(joiSchemaToCode(schema)).toEqual(expected)
        }
      )
    })

    describe("description()", () => {
      it.each([
        [
          Joi.any().description("description"),
          'Joi.any().description("description")',
        ],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("example()", () => {
      it.each([
        [Joi.any().example("example"), 'Joi.any().example("example")'],
        [
          Joi.any().example("example", { override: true }),
          'Joi.any().example("example")',
        ],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("forbidden()", () => {
      it.each([
        [Joi.any().forbidden(), "Joi.any().forbidden()"],
        [Joi.any().presence("forbidden"), "Joi.any().forbidden()"],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("invalid()", () => {
      it.each([
        [Joi.any().invalid(), "Joi.any()"],
        [Joi.any().invalid("invalid1"), 'Joi.any().invalid("invalid1")'],
        [
          Joi.any().invalid("invalid1", "invalid2"),
          'Joi.any().invalid("invalid1","invalid2")',
        ],
        [Joi.any().invalid(3), "Joi.any().invalid(3)"],
        [Joi.any().invalid(3, 4), "Joi.any().invalid(3,4)"],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("label()", () => {
      it.each([[Joi.any().label("label"), 'Joi.any().label("label")']])(
        "returns expected value",
        (schema, expected) => {
          expect(joiSchemaToCode(schema)).toEqual(expected)
        }
      )
    })

    describe("note()", () => {
      it.each([
        [Joi.any().note("note1"), 'Joi.any().note("note1")'],
        [Joi.any().note("note1", "note2"), 'Joi.any().note("note1","note2")'],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("only()", () => {
      it.each([
        [Joi.any().only(), "Joi.any().only()"],
        [
          Joi.any().allow("allow1", "allow2").only(),
          'Joi.any().allow("allow1","allow2").only()',
        ],
        [
          Joi.any().valid("valid1", "valid2").only(),
          'Joi.any().allow("valid1","valid2").only()',
        ],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("optional()", () => {
      it.each([
        [Joi.any().optional(), "Joi.any().optional()"],
        [Joi.any().presence("optional"), "Joi.any().optional()"],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("raw()", () => {
      it.each([
        [Joi.any().raw(), "Joi.any().raw()"],
        [Joi.any().raw(true), "Joi.any().raw()"],
        [Joi.any().raw(false), "Joi.any()"],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("required()", () => {
      it.each([
        [Joi.any().required(), "Joi.any().required()"],
        [Joi.any().presence("required"), "Joi.any().required()"],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("strict()", () => {
      it.each([
        [Joi.any().strict(), "Joi.any().strict()"],
        [Joi.any().strict(true), "Joi.any().strict()"],
        [Joi.any().strict(false), "Joi.any()"],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("tag()", () => {
      it.each([
        [Joi.any().tag("tag1"), 'Joi.any().tag("tag1")'],
        [Joi.any().tag("tag1", "tag2"), 'Joi.any().tag("tag1","tag2")'],
      ])("returns expected value", (schema, expected) => {
        expect(joiSchemaToCode(schema)).toEqual(expected)
      })
    })

    describe("unit()", () => {
      it.each([[Joi.any().unit("unit"), 'Joi.any().unit("unit")']])(
        "returns expected value",
        (schema, expected) => {
          expect(joiSchemaToCode(schema)).toEqual(expected)
        }
      )
    })
  })

  describe("array schema", () => {
    it.each([
      [Joi.array().allow("allow"), 'Joi.array().allow("allow")'],
      [Joi.array().default("default"), 'Joi.array().default("default")'],
      [
        Joi.array().description("description"),
        'Joi.array().description("description")',
      ],
      [Joi.array().example("example"), 'Joi.array().example("example")'],
      [Joi.array().forbidden(), "Joi.array().forbidden()"],
      [Joi.array().invalid("invalid"), 'Joi.array().invalid("invalid")'],
      [Joi.array().label("label"), 'Joi.array().label("label")'],
      [Joi.array().length(5), "Joi.array().length(5)"],
      [Joi.array().items(), "Joi.array()"],
      [
        Joi.array().items(
          Joi.any(),
          Joi.binary(),
          Joi.boolean(),
          Joi.date(),
          Joi.number(),
          Joi.object(),
          Joi.string()
        ),
        "Joi.array().items(Joi.any(),Joi.binary(),Joi.boolean(),Joi.date(),Joi.number(),Joi.object({}),Joi.string())",
      ],
      [Joi.array().max(5), "Joi.array().max(5)"],
      [Joi.array().min(5), "Joi.array().min(5)"],
      [Joi.array().note("note"), 'Joi.array().note("note")'],
      [Joi.array().only(), "Joi.array().only()"],
      [Joi.array().optional(), "Joi.array().optional()"],
      [Joi.array().ordered(), "Joi.array()"],
      [
        Joi.array().ordered(Joi.string(), Joi.number()),
        "Joi.array().ordered(Joi.string(),Joi.number())",
      ],
      [Joi.array().raw(), "Joi.array().raw()"],
      [Joi.array().required(), "Joi.array().required()"],
      [Joi.array().single(), "Joi.array().single()"],
      [Joi.array().single(true), "Joi.array().single()"],
      [Joi.array().single(false), "Joi.array()"],
      [Joi.array().sparse(), "Joi.array().sparse()"],
      [Joi.array().sparse(true), "Joi.array().sparse()"],
      [Joi.array().sparse(false), "Joi.array()"],
      [Joi.array().strict(), "Joi.array().strict()"],
      [Joi.array().tag("tag"), 'Joi.array().tag("tag")'],
      [Joi.array().unique(), "Joi.array().unique(undefined,undefined)"],
      [
        Joi.array().unique("a.b", { ignoreUndefined: true, separator: "." }),
        'Joi.array().unique("a.b",{"ignoreUndefined":true,"separator":"."})',
      ],
      [Joi.array().unit("unit"), 'Joi.array().unit("unit")'],
      [Joi.array().valid("valid"), 'Joi.array().allow("valid").only()'],
    ])("returns expected value", (schema, expected) => {
      expect(joiSchemaToCode(schema)).toEqual(expected)
    })
  })

  describe("binary schema", () => {
    it.each([
      [Joi.binary().allow("allow"), 'Joi.binary().allow("allow")'],
      [Joi.binary().default("default"), 'Joi.binary().default("default")'],
      [
        Joi.binary().description("description"),
        'Joi.binary().description("description")',
      ],
      [Joi.binary().encoding("base64"), 'Joi.binary().encoding("base64")'],
      [Joi.binary().example("example"), 'Joi.binary().example("example")'],
      [Joi.binary().forbidden(), "Joi.binary().forbidden()"],
      [Joi.binary().invalid("invalid"), 'Joi.binary().invalid("invalid")'],
      [Joi.binary().label("label"), 'Joi.binary().label("label")'],
      [Joi.binary().length(5), "Joi.binary().length(5)"],
      [Joi.binary().max(5), "Joi.binary().max(5)"],
      [Joi.binary().min(5), "Joi.binary().min(5)"],
      [Joi.binary().note("note"), 'Joi.binary().note("note")'],
      [Joi.binary().only(), "Joi.binary().only()"],
      [Joi.binary().optional(), "Joi.binary().optional()"],
      [Joi.binary().raw(), "Joi.binary().raw()"],
      [Joi.binary().required(), "Joi.binary().required()"],
      [Joi.binary().strict(), "Joi.binary().strict()"],
      [Joi.binary().tag("tag"), 'Joi.binary().tag("tag")'],
      [Joi.binary().unit("unit"), 'Joi.binary().unit("unit")'],
      [Joi.binary().valid("valid"), 'Joi.binary().allow("valid").only()'],
    ])("returns expected value", (schema, expected) => {
      expect(joiSchemaToCode(schema)).toEqual(expected)
    })
  })

  describe("boolean schema", () => {
    it.each([
      [Joi.boolean().allow("allow"), 'Joi.boolean().allow("allow")'],
      [Joi.boolean().default("default"), 'Joi.boolean().default("default")'],
      [
        Joi.boolean().description("description"),
        'Joi.boolean().description("description")',
      ],
      [Joi.boolean().example("example"), 'Joi.boolean().example("example")'],
      [Joi.boolean().falsy(), "Joi.boolean().falsy()"],
      [Joi.boolean().falsy("N"), 'Joi.boolean().falsy("N")'],
      [Joi.boolean().falsy("N", "No"), 'Joi.boolean().falsy("N","No")'],
      [Joi.boolean().forbidden(), "Joi.boolean().forbidden()"],
      [Joi.boolean().invalid("invalid"), 'Joi.boolean().invalid("invalid")'],
      [Joi.boolean().label("label"), 'Joi.boolean().label("label")'],
      [Joi.boolean().note("note"), 'Joi.boolean().note("note")'],
      [Joi.boolean().only(), "Joi.boolean().only()"],
      [Joi.boolean().optional(), "Joi.boolean().optional()"],
      [Joi.boolean().raw(), "Joi.boolean().raw()"],
      [Joi.boolean().required(), "Joi.boolean().required()"],
      [Joi.boolean().sensitive(), "Joi.boolean().sensitive()"],
      [Joi.boolean().sensitive(true), "Joi.boolean().sensitive()"],
      [Joi.boolean().sensitive(false), "Joi.boolean()"],
      [Joi.boolean().strict(), "Joi.boolean().strict()"],
      [Joi.boolean().tag("tag"), 'Joi.boolean().tag("tag")'],
      [Joi.boolean().truthy(), "Joi.boolean().truthy()"],
      [Joi.boolean().truthy("Y"), 'Joi.boolean().truthy("Y")'],
      [Joi.boolean().truthy("Y", "Yes"), 'Joi.boolean().truthy("Y","Yes")'],
      [Joi.boolean().unit("unit"), 'Joi.boolean().unit("unit")'],
      [Joi.boolean().valid("valid"), 'Joi.boolean().allow("valid").only()'],
    ])("returns expected value", (schema, expected) => {
      expect(joiSchemaToCode(schema)).toEqual(expected)
    })
  })

  describe("date schema", () => {
    it.each([
      [Joi.date().allow("allow"), 'Joi.date().allow("allow")'],
      [Joi.date().default("default"), 'Joi.date().default("default")'],
      [
        Joi.date().description("description"),
        'Joi.date().description("description")',
      ],
      [Joi.date().example("example"), 'Joi.date().example("example")'],
      [Joi.date().forbidden(), "Joi.date().forbidden()"],
      [
        Joi.date().greater("2022-01-01"),
        'Joi.date().greater("2022-01-01T00:00:00.000Z")',
      ],
      [Joi.date().invalid("invalid"), 'Joi.date().invalid("invalid")'],
      [Joi.date().iso(), "Joi.date().iso()"],
      [Joi.date().label("label"), 'Joi.date().label("label")'],
      [
        Joi.date().less("2022-01-01"),
        'Joi.date().less("2022-01-01T00:00:00.000Z")',
      ],
      [
        Joi.date().max("2022-01-01"),
        'Joi.date().max("2022-01-01T00:00:00.000Z")',
      ],
      [
        Joi.date().min("2022-01-01"),
        'Joi.date().min("2022-01-01T00:00:00.000Z")',
      ],
      [Joi.date().note("note"), 'Joi.date().note("note")'],
      [Joi.date().only(), "Joi.date().only()"],
      [Joi.date().optional(), "Joi.date().optional()"],
      [Joi.date().raw(), "Joi.date().raw()"],
      [Joi.date().required(), "Joi.date().required()"],
      [Joi.date().strict(), "Joi.date().strict()"],
      [Joi.date().tag("tag"), 'Joi.date().tag("tag")'],
      [Joi.date().timestamp(), 'Joi.date().timestamp("javascript")'],
      [Joi.date().timestamp("unix"), 'Joi.date().timestamp("unix")'],
      [Joi.date().unit("unit"), 'Joi.date().unit("unit")'],
      [Joi.date().valid("valid"), 'Joi.date().allow("valid").only()'],
    ])("returns expected value", (schema, expected) => {
      expect(joiSchemaToCode(schema)).toEqual(expected)
    })
  })

  describe("number schema", () => {
    it.each([
      [Joi.number().allow("allow"), 'Joi.number().allow("allow")'],
      [Joi.number().default("default"), 'Joi.number().default("default")'],
      [
        Joi.number().description("description"),
        'Joi.number().description("description")',
      ],
      [Joi.number().example("example"), 'Joi.number().example("example")'],
      [Joi.number().forbidden(), "Joi.number().forbidden()"],
      [Joi.number().greater(5), "Joi.number().greater(5)"],
      [Joi.number().integer(), "Joi.number().integer()"],
      [Joi.number().invalid("invalid"), 'Joi.number().invalid("invalid")'],
      [Joi.number().label("label"), 'Joi.number().label("label")'],
      [Joi.number().less(5), "Joi.number().less(5)"],
      [Joi.number().max(5), "Joi.number().max(5)"],
      [Joi.number().min(5), "Joi.number().min(5)"],
      [Joi.number().multiple(5), "Joi.number().multiple(5)"],
      [Joi.number().negative(), "Joi.number().negative()"],
      [Joi.number().note("note"), 'Joi.number().note("note")'],
      [Joi.number().only(), "Joi.number().only()"],
      [Joi.number().optional(), "Joi.number().optional()"],
      [Joi.number().port(), "Joi.number().port()"],
      [Joi.number().positive(), "Joi.number().positive()"],
      [Joi.number().precision(2), "Joi.number().precision(2)"],
      [Joi.number().raw(), "Joi.number().raw()"],
      [Joi.number().required(), "Joi.number().required()"],
      [Joi.number().sign("negative"), "Joi.number().negative()"],
      [Joi.number().sign("positive"), "Joi.number().positive()"],
      [Joi.number().strict(), "Joi.number().strict()"],
      [Joi.number().tag("tag"), 'Joi.number().tag("tag")'],
      [Joi.number().unit("unit"), 'Joi.number().unit("unit")'],
      [Joi.number().unsafe(), "Joi.number().unsafe()"],
      [Joi.number().unsafe(true), "Joi.number().unsafe()"],
      [Joi.number().unsafe(false), "Joi.number()"],
      [Joi.number().valid("valid"), 'Joi.number().allow("valid").only()'],
    ])("returns expected value", (schema, expected) => {
      expect(joiSchemaToCode(schema)).toEqual(expected)
    })
  })

  describe("object schema", () => {
    it.each([
      [
        Joi.object({
          any: Joi.any(),
          array: Joi.array(),
          binary: Joi.binary(),
          boolean: Joi.boolean(),
          date: Joi.date(),
          number: Joi.number(),
          string: Joi.string(),
        }),
        'Joi.object({"any": Joi.any(),"array": Joi.array(),"binary": Joi.binary(),"boolean": Joi.boolean(),"date": Joi.date(),"number": Joi.number(),"string": Joi.string()})',
      ],
      [Joi.object().allow("allow"), 'Joi.object({}).allow("allow")'],
      [Joi.object().and("a", "b"), 'Joi.object({}).and("a","b")'],
      [Joi.object().default("default"), 'Joi.object({}).default("default")'],
      [
        Joi.object().description("description"),
        'Joi.object({}).description("description")',
      ],
      [Joi.object().example("example"), 'Joi.object({}).example("example")'],
      [Joi.object().forbidden(), "Joi.object({}).forbidden()"],
      [Joi.object().invalid("invalid"), 'Joi.object({}).invalid("invalid")'],
      [
        Joi.object().keys({ a: Joi.string(), b: Joi.number() }),
        'Joi.object({"a": Joi.string(),"b": Joi.number()})',
      ],
      [Joi.object().label("label"), 'Joi.object({}).label("label")'],
      [Joi.object().length(5), "Joi.object({}).length(5)"],
      [Joi.object().max(5), "Joi.object({}).max(5)"],
      [Joi.object().min(5), "Joi.object({}).min(5)"],
      [Joi.object().nand("a", "b"), 'Joi.object({}).nand("a","b")'],
      [Joi.object().note("note"), 'Joi.object({}).note("note")'],
      [Joi.object().only(), "Joi.object({}).only()"],
      [Joi.object().optional(), "Joi.object({}).optional()"],
      [Joi.object().or("a", "b"), 'Joi.object({}).or("a","b")'],
      [Joi.object().oxor("a", "b"), 'Joi.object({}).oxor("a","b")'],
      [Joi.object().raw(), "Joi.object({}).raw()"],
      [Joi.object().regex(), "Joi.object({}).regex()"],
      [Joi.object().required(), "Joi.object({}).required()"],
      [Joi.object().strict(), "Joi.object({}).strict()"],
      [Joi.object().tag("tag"), 'Joi.object({}).tag("tag")'],
      [Joi.object().unit("unit"), 'Joi.object({}).unit("unit")'],
      [Joi.object().unknown(), "Joi.object({}).unknown()"],
      [Joi.object().unknown(true), "Joi.object({}).unknown()"],
      [Joi.object().unknown(false), "Joi.object({})"],
      [Joi.object().valid("valid"), 'Joi.object({}).allow("valid").only()'],
      [Joi.object().xor("a", "b"), 'Joi.object({}).xor("a","b")'],
    ])("returns expected value", (schema, expected) => {
      expect(joiSchemaToCode(schema)).toEqual(expected)
    })
  })

  describe("string schema", () => {
    it.each([
      [Joi.string().allow("allow"), 'Joi.string().allow("allow")'],
      [Joi.string().alphanum(), "Joi.string().alphanum()"],
      [
        Joi.string().base64(),
        'Joi.string().base64({"urlSafe":false,"paddingRequired":true})',
      ],
      [
        Joi.string().base64({ paddingRequired: true, urlSafe: true }),
        'Joi.string().base64({"urlSafe":true,"paddingRequired":true})',
      ],
      [Joi.string().creditCard(), "Joi.string().creditCard()"],
      [
        Joi.string().dataUri(),
        'Joi.string().dataUri({"paddingRequired":true})',
      ],
      [
        Joi.string().dataUri({ paddingRequired: true }),
        'Joi.string().dataUri({"paddingRequired":true})',
      ],
      [Joi.string().default("default"), 'Joi.string().default("default")'],
      [
        Joi.string().description("description"),
        'Joi.string().description("description")',
      ],
      [Joi.string().domain(), "Joi.string().domain({})"],
      [
        Joi.string().domain({
          allowFullyQualified: true,
          allowUnicode: true,
          minDomainSegments: 2,
          tlds: {
            allow: ["com", "net"],
            deny: ["org", "edu"],
          },
        }),
        'Joi.string().domain({"allowFullyQualified":true,"allowUnicode":true,"minDomainSegments":2,"tlds":{"allow":["com","net"],"deny":["org","edu"]}})',
      ],
      [Joi.string().email(), "Joi.string().email({})"],
      [
        Joi.string().email({
          allowFullyQualified: true,
          allowUnicode: true,
          ignoreLength: true,
          minDomainSegments: 2,
          multiple: true,
          separator: ",",
          tlds: { allow: ["com", "net"], deny: ["org", "edu"] },
        }),
        'Joi.string().email({"allowFullyQualified":true,"allowUnicode":true,"ignoreLength":true,"minDomainSegments":2,"multiple":true,"separator":",","tlds":{"allow":["com","net"],"deny":["org","edu"]}})',
      ],
      [Joi.string().example("example"), 'Joi.string().example("example")'],
      [Joi.string().forbidden(), "Joi.string().forbidden()"],
      [Joi.string().guid(), "Joi.string().guid({})"],
      [
        Joi.string().guid({ version: ["uuidv4", "uuidv5"], separator: "-" }),
        'Joi.string().guid({"version":["uuidv4","uuidv5"],"separator":"-"})',
      ],
      [Joi.string().hex(), 'Joi.string().hex({"byteAligned":false})'],
      [
        Joi.string().hex({ byteAligned: true }),
        'Joi.string().hex({"byteAligned":true})',
      ],
      [Joi.string().hostname(), "Joi.string().hostname()"],
      [Joi.string().insensitive(), "Joi.string().insensitive()"],
      [Joi.string().invalid("invalid"), 'Joi.string().invalid("invalid")'],
      [Joi.string().ip(), 'Joi.string().ip({"cidr":"optional"})'],
      [
        Joi.string().ip({ version: ["ipv4", "ipv6"], cidr: "optional" }),
        'Joi.string().ip({"cidr":"optional","version":["ipv4","ipv6"]})',
      ],
      [Joi.string().isoDate(), "Joi.string().isoDate()"],
      [Joi.string().isoDuration(), "Joi.string().isoDuration()"],
      [Joi.string().label("label"), 'Joi.string().label("label")'],
      [Joi.string().length(5), "Joi.string().length(5)"],
      [Joi.string().length(5, "utf-8"), 'Joi.string().length(5,"utf-8")'],
      [Joi.string().lowercase(), "Joi.string().lowercase()"],
      [Joi.string().max(5), "Joi.string().max(5)"],
      [Joi.string().max(5, "utf-8"), 'Joi.string().max(5,"utf-8")'],
      [Joi.string().min(5), "Joi.string().min(5)"],
      [Joi.string().min(5, "utf-8"), 'Joi.string().min(5,"utf-8")'],
      [Joi.string().normalize(), 'Joi.string().normalize("NFC")'],
      [Joi.string().normalize("NFKC"), 'Joi.string().normalize("NFKC")'],
      [Joi.string().note("note"), 'Joi.string().note("note")'],
      [Joi.string().only(), "Joi.string().only()"],
      [Joi.string().optional(), "Joi.string().optional()"],
      [Joi.string().pattern(/abc/i), "Joi.string().pattern(/abc/i,{})"],
      [
        Joi.string().pattern(/abc/i, { name: "name", invert: true }),
        'Joi.string().pattern(/abc/i,{"name":"name","invert":true})',
      ],
      [Joi.string().raw(), "Joi.string().raw()"],
      [
        Joi.string().replace(/abc/i, "replacement"),
        'Joi.string().replace(/abc/i, "replacement")',
      ],
      [Joi.string().required(), "Joi.string().required()"],
      [Joi.string().strict(), "Joi.string().strict()"],
      [Joi.string().tag("tag"), 'Joi.string().tag("tag")'],
      [Joi.string().token(), "Joi.string().token()"],
      [Joi.string().trim(), "Joi.string().trim(true)"],
      [Joi.string().trim(true), "Joi.string().trim(true)"],
      [Joi.string().trim(false), "Joi.string().trim(false)"],
      [Joi.string().truncate(), "Joi.string().truncate()"],
      [Joi.string().truncate(true), "Joi.string().truncate()"],
      [Joi.string().truncate(false), "Joi.string()"],
      [Joi.string().unit("unit"), 'Joi.string().unit("unit")'],
      [Joi.string().uppercase(), "Joi.string().uppercase()"],
      [Joi.string().uri(), "Joi.string().uri({})"],
      [
        Joi.string().uri({
          scheme: "http",
          allowRelative: true,
          relativeOnly: true,
          allowQuerySquareBrackets: true,
          domain: { allowFullyQualified: true, allowUnicode: true },
        }),
        'Joi.string().uri({"scheme":"http","allowRelative":true,"relativeOnly":true,"allowQuerySquareBrackets":true,"domain":{"allowFullyQualified":true,"allowUnicode":true}})',
      ],
      [Joi.string().valid("valid"), 'Joi.string().allow("valid").only()'],
    ])("returns expected value", (schema, expected) => {
      expect(joiSchemaToCode(schema)).toEqual(expected)
    })
  })

  describe("alternatives schema", () => {
    it.each([
      [
        Joi.alternatives()
          .try(Joi.string().pattern(/^foo/), Joi.string().pattern(/bar$/))
          .match("all"),
        'Joi.alternatives().match("all").try(Joi.string().pattern(/^foo/,{}),Joi.string().pattern(/bar$/,{}))',
      ],
      [
        Joi.alternatives()
          .try(Joi.string().pattern(/^foo/), Joi.string().pattern(/bar$/))
          .match("any"),
        'Joi.alternatives().match("any").try(Joi.string().pattern(/^foo/,{}),Joi.string().pattern(/bar$/,{}))',
      ],
      [
        Joi.alternatives()
          .try(Joi.string().pattern(/^foo/), Joi.string().pattern(/bar$/))
          .match("one"),
        'Joi.alternatives().match("one").try(Joi.string().pattern(/^foo/,{}),Joi.string().pattern(/bar$/,{}))',
      ],
    ])("returns expected value", (schema, expected) => {
      expect(joiSchemaToCode(schema)).toEqual(expected)
    })
  })
})
