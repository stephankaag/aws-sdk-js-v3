import { _Comment } from "./_Comment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCommentContentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    comment: {
      shape: _Comment
    }
  }
};
