import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCorsPolicyInput: _Structure_ = {
  type: "structure",
  required: ["ContainerName"],
  members: {
    ContainerName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
