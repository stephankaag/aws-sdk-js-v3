import { DeleteLaunchConfigurationInput } from "../shapes/DeleteLaunchConfigurationInput";
import { DeleteLaunchConfigurationOutput } from "../shapes/DeleteLaunchConfigurationOutput";
import { ResourceInUseFault } from "../shapes/ResourceInUseFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteLaunchConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLaunchConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLaunchConfigurationInput
  },
  output: {
    shape: DeleteLaunchConfigurationOutput
  },
  errors: [
    {
      shape: ResourceInUseFault
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
