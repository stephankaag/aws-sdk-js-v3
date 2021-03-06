import { _Members } from "./_Members";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMembersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Members: {
      shape: _Members,
      locationName: "members"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
