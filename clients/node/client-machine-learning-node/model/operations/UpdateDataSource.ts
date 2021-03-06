import { UpdateDataSourceInput } from "../shapes/UpdateDataSourceInput";
import { UpdateDataSourceOutput } from "../shapes/UpdateDataSourceOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDataSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDataSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDataSourceInput
  },
  output: {
    shape: UpdateDataSourceOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
