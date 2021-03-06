import { _VPC } from "./_VPC";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVPCAssociationAuthorizationInput: _Structure_ = {
  type: "structure",
  required: ["HostedZoneId", "VPC"],
  members: {
    HostedZoneId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    },
    VPC: {
      shape: _VPC
    }
  }
};
