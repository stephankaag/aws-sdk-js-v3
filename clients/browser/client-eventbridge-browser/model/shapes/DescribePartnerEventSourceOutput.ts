import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePartnerEventSourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
