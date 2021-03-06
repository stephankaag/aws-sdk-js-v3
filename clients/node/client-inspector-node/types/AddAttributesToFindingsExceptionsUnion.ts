import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { AccessDeniedException } from "./AccessDeniedException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceTemporarilyUnavailableException } from "./ServiceTemporarilyUnavailableException";
export type AddAttributesToFindingsExceptionsUnion =
  | InternalException
  | InvalidInputException
  | AccessDeniedException
  | NoSuchEntityException
  | ServiceTemporarilyUnavailableException;
