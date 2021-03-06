import { Structure as _Structure_ } from "@aws-sdk/types";

export const PreconditionNotMetException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    RequestId: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "PreconditionNotMetException"
};
