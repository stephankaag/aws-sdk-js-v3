import { CreateVpnGatewayInput } from "../shapes/CreateVpnGatewayInput";
import { CreateVpnGatewayOutput } from "../shapes/CreateVpnGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVpnGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpnGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVpnGatewayInput
  },
  output: {
    shape: CreateVpnGatewayOutput
  },
  errors: []
};
