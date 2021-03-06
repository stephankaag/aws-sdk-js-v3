import { CopyImageInput } from "../shapes/CopyImageInput";
import { CopyImageOutput } from "../shapes/CopyImageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopyImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyImageInput
  },
  output: {
    shape: CopyImageOutput
  },
  errors: []
};
