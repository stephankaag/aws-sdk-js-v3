import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
export type GetCrawlerExceptionsUnion =
  | EntityNotFoundException
  | OperationTimeoutException;
