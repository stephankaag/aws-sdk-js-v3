import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSolutionInput: _Structure_ = {
  type: "structure",
  required: ["solutionArn"],
  members: {
    solutionArn: {
      shape: {
        type: "string"
      }
    }
  }
};
