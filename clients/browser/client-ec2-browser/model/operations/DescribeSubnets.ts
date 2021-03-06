import { DescribeSubnetsInput } from "../shapes/DescribeSubnetsInput";
import { DescribeSubnetsOutput } from "../shapes/DescribeSubnetsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSubnets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSubnets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSubnetsInput
  },
  output: {
    shape: DescribeSubnetsOutput
  },
  errors: []
};
