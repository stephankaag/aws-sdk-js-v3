import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupPoliciesInput: _Structure_ = {
  type: "structure",
  required: ["GroupName"],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
