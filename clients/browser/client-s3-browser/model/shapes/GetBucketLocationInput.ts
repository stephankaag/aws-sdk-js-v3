import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBucketLocationInput: _Structure_ = {
  type: "structure",
  required: ["Bucket"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    }
  }
};
