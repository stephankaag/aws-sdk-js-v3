import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
export type ListTagsForResourceExceptionsUnion =
  | ResourceNotFoundException
  | NotAuthorizedException
  | TooManyRequestsException
  | InvalidParameterException
  | InternalErrorException;
