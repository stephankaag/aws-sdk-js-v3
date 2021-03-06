import { GetCapacityReservationUsageInput } from "../shapes/GetCapacityReservationUsageInput";
import { GetCapacityReservationUsageOutput } from "../shapes/GetCapacityReservationUsageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCapacityReservationUsage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCapacityReservationUsage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCapacityReservationUsageInput
  },
  output: {
    shape: GetCapacityReservationUsageOutput
  },
  errors: []
};
