import { GetSecurityConfigurationsInput } from "../shapes/GetSecurityConfigurationsInput";
import { GetSecurityConfigurationsOutput } from "../shapes/GetSecurityConfigurationsOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSecurityConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSecurityConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSecurityConfigurationsInput
  },
  output: {
    shape: GetSecurityConfigurationsOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
