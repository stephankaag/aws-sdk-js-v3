import { DeleteTransitGatewayRouteInput } from "../shapes/DeleteTransitGatewayRouteInput";
import { DeleteTransitGatewayRouteOutput } from "../shapes/DeleteTransitGatewayRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTransitGatewayRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTransitGatewayRoute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTransitGatewayRouteInput
  },
  output: {
    shape: DeleteTransitGatewayRouteOutput
  },
  errors: []
};
