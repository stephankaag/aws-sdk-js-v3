import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteGroupPolicyExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | ServiceFailureException;
