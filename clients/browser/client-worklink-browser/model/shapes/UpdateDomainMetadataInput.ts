import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDomainMetadataInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn", "DomainName"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    DomainName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    }
  }
};
