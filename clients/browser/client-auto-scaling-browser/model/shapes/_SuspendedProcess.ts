import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SuspendedProcess: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProcessName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SuspensionReason: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
