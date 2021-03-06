import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type AddApplicationReferenceDataSourceExceptionsUnion =
  | ResourceNotFoundException
  | ResourceInUseException
  | InvalidArgumentException
  | ConcurrentModificationException
  | UnsupportedOperationException;
