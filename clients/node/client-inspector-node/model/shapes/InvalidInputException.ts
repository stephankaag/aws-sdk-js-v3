import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidInputException: _Structure_ = {
  type: "structure",
  required: ["message", "errorCode", "canRetry"],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    errorCode: {
      shape: {
        type: "string"
      }
    },
    canRetry: {
      shape: {
        type: "boolean"
      }
    }
  },
  exceptionType: "InvalidInputException"
};
