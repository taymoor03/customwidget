import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  required: [
    "countdowndate",
    "expiredmessage"
  ],
  properties: {
    countdowndate: {
      type: "string",
      title: "End Date",
      format: "date-time",
    },
    expiredmessage: {
      type: "string",
      title: "Expired message",
      default: "Countdown is done.",
    },
    colorbg: {
      type: "string",
      title: "Background Color",
      default: "#FBC91E"
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  countdowndate: {
    "ui:help": "Choose a date and time for the countdown."
  },
  expiredmessage: {
    "ui:help": "Enter an expiration message for the countdown."
  },
  colorbg: {
    "ui:widget": "color",
    "ui:help": "Choose a color for the background of the countdown boxes. Default: #FBC91E"
  },
};
