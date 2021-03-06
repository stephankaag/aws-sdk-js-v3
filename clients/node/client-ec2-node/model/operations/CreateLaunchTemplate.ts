import { CreateLaunchTemplateInput } from "../shapes/CreateLaunchTemplateInput";
import { CreateLaunchTemplateOutput } from "../shapes/CreateLaunchTemplateOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLaunchTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLaunchTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLaunchTemplateInput
  },
  output: {
    shape: CreateLaunchTemplateOutput
  },
  errors: []
};
