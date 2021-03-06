import { _Subnets } from "./_Subnets";
import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VPCConfig: _Structure_ = {
  type: "structure",
  required: ["subnets"],
  members: {
    subnets: {
      shape: _Subnets
    },
    securityGroups: {
      shape: _SecurityGroups
    },
    assignPublicIp: {
      shape: {
        type: "boolean"
      }
    }
  }
};
