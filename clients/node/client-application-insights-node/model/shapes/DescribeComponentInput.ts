import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeComponentInput: _Structure_ = {
  type: "structure",
  required: ["ResourceGroupName", "ComponentName"],
  members: {
    ResourceGroupName: {
      shape: {
        type: "string"
      }
    },
    ComponentName: {
      shape: {
        type: "string"
      }
    }
  }
};
