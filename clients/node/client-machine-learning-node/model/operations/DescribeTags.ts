import { DescribeTagsInput } from "../shapes/DescribeTagsInput";
import { DescribeTagsOutput } from "../shapes/DescribeTagsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTagsInput
  },
  output: {
    shape: DescribeTagsOutput
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
