import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAddressesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
