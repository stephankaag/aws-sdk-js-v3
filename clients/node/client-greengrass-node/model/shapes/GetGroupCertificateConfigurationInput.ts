import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGroupCertificateConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["GroupId"],
  members: {
    GroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "GroupId"
    }
  }
};
