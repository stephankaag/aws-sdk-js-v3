import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendTaskHeartbeatInput: _Structure_ = {
  type: "structure",
  required: ["taskToken"],
  members: {
    taskToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
