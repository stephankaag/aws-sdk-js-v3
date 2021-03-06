import { DescribeEntityAggregatesInput } from "../shapes/DescribeEntityAggregatesInput";
import { DescribeEntityAggregatesOutput } from "../shapes/DescribeEntityAggregatesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEntityAggregates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEntityAggregates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEntityAggregatesInput
  },
  output: {
    shape: DescribeEntityAggregatesOutput
  },
  errors: []
};
