import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteBasePathMappingExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | ConflictException
  | BadRequestException
  | TooManyRequestsException;
