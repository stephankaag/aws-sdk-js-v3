import { Structure as _Structure_ } from "@aws-sdk/types";

export const InternalServerErrorException: _Structure_ = {
  type: "structure",
  required: ["Message"],
  members: {
    Message: {
      shape: {
        type: "string"
      },
      locationName: "message"
    }
  },
  exceptionType: "InternalServerErrorException"
};
