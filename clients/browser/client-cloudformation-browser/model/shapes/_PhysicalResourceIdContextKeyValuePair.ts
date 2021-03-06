import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PhysicalResourceIdContextKeyValuePair: _Structure_ = {
  type: "structure",
  required: ["Key", "Value"],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    }
  }
};
