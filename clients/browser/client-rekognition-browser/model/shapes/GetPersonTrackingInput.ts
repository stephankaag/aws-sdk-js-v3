import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPersonTrackingInput: _Structure_ = {
  type: "structure",
  required: ["JobId"],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    SortBy: {
      shape: {
        type: "string"
      }
    }
  }
};
