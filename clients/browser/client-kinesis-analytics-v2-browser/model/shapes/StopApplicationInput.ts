import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopApplicationInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
