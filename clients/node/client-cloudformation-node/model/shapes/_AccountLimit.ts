import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountLimit: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "integer"
      }
    }
  }
};
