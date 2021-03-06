import { GetTemplateInput } from "../shapes/GetTemplateInput";
import { GetTemplateOutput } from "../shapes/GetTemplateOutput";
import { ChangeSetNotFoundException } from "../shapes/ChangeSetNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTemplateInput
  },
  output: {
    shape: GetTemplateOutput,
    resultWrapper: "GetTemplateResult"
  },
  errors: [
    {
      shape: ChangeSetNotFoundException
    }
  ]
};
