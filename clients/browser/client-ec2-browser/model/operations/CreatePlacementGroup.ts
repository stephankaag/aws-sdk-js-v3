import { CreatePlacementGroupInput } from "../shapes/CreatePlacementGroupInput";
import { CreatePlacementGroupOutput } from "../shapes/CreatePlacementGroupOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePlacementGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePlacementGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePlacementGroupInput
  },
  output: {
    shape: CreatePlacementGroupOutput
  },
  errors: []
};
