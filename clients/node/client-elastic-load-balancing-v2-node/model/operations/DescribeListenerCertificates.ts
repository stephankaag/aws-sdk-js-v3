import { DescribeListenerCertificatesInput } from "../shapes/DescribeListenerCertificatesInput";
import { DescribeListenerCertificatesOutput } from "../shapes/DescribeListenerCertificatesOutput";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeListenerCertificates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeListenerCertificates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeListenerCertificatesInput
  },
  output: {
    shape: DescribeListenerCertificatesOutput,
    resultWrapper: "DescribeListenerCertificatesResult"
  },
  errors: [
    {
      shape: ListenerNotFoundException
    }
  ]
};
