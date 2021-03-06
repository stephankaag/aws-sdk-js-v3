import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { ResourceArnRequiredException } from "../shapes/ResourceArnRequiredException";
import { ApplicationDoesNotExistException } from "../shapes/ApplicationDoesNotExistException";
import { DeploymentGroupDoesNotExistException } from "../shapes/DeploymentGroupDoesNotExistException";
import { DeploymentConfigDoesNotExistException } from "../shapes/DeploymentConfigDoesNotExistException";
import { TagRequiredException } from "../shapes/TagRequiredException";
import { InvalidTagsToAddException } from "../shapes/InvalidTagsToAddException";
import { ArnNotSupportedException } from "../shapes/ArnNotSupportedException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagResourceInput
  },
  output: {
    shape: UntagResourceOutput
  },
  errors: [
    {
      shape: ResourceArnRequiredException
    },
    {
      shape: ApplicationDoesNotExistException
    },
    {
      shape: DeploymentGroupDoesNotExistException
    },
    {
      shape: DeploymentConfigDoesNotExistException
    },
    {
      shape: TagRequiredException
    },
    {
      shape: InvalidTagsToAddException
    },
    {
      shape: ArnNotSupportedException
    },
    {
      shape: InvalidArnException
    }
  ]
};
