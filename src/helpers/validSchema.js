const Ajv = require("ajv");

const validSchema = (schema, fileName = "") => {
  try {
    const schemaFile = require(`../schemas/${fileName}.json`);
    const ajv = new Ajv();
    const validate = ajv.compile(schemaFile);
    const valid = validate(schema);
    if (!valid) {
      console.error("AJV validation Errors: ", ajv.errorsText(validate.errors));
    }
    return valid;
  } catch (error) {
    console.error(error);
  }
};

exports.validSchema = validSchema;
