import { UpdateQueueInput } from "../shapes/UpdateQueueInput";
import { UpdateQueueOutput } from "../shapes/UpdateQueueOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateQueue",
  http: {
    method: "PUT",
    requestUri: "/2017-08-29/queues/{name}"
  },
  input: {
    shape: UpdateQueueInput
  },
  output: {
    shape: UpdateQueueOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
