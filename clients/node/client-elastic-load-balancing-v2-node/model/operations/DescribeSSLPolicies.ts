import { DescribeSSLPoliciesInput } from "../shapes/DescribeSSLPoliciesInput";
import { DescribeSSLPoliciesOutput } from "../shapes/DescribeSSLPoliciesOutput";
import { SSLPolicyNotFoundException } from "../shapes/SSLPolicyNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSSLPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSSLPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSSLPoliciesInput
  },
  output: {
    shape: DescribeSSLPoliciesOutput,
    resultWrapper: "DescribeSSLPoliciesResult"
  },
  errors: [
    {
      shape: SSLPolicyNotFoundException
    }
  ]
};
