import { UpdateCoreDefinitionInput } from "../shapes/UpdateCoreDefinitionInput";
import { UpdateCoreDefinitionOutput } from "../shapes/UpdateCoreDefinitionOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateCoreDefinition: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCoreDefinition",
  http: {
    method: "PUT",
    requestUri: "/greengrass/definition/cores/{CoreDefinitionId}"
  },
  input: {
    shape: UpdateCoreDefinitionInput
  },
  output: {
    shape: UpdateCoreDefinitionOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
