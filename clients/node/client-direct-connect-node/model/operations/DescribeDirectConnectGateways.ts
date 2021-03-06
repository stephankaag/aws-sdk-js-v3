import { DescribeDirectConnectGatewaysInput } from "../shapes/DescribeDirectConnectGatewaysInput";
import { DescribeDirectConnectGatewaysOutput } from "../shapes/DescribeDirectConnectGatewaysOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDirectConnectGateways: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDirectConnectGateways",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDirectConnectGatewaysInput
  },
  output: {
    shape: DescribeDirectConnectGatewaysOutput
  },
  errors: [
    {
      shape: DirectConnectServerException
    },
    {
      shape: DirectConnectClientException
    }
  ]
};
