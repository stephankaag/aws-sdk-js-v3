import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceGroupTag: _Structure_ = {
  type: "structure",
  required: ["key"],
  members: {
    key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    value: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
