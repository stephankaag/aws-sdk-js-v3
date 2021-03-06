import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableDomainTransferLock } from "../model/operations/EnableDomainTransferLock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableDomainTransferLockInput } from "../types/EnableDomainTransferLockInput";
import { EnableDomainTransferLockOutput } from "../types/EnableDomainTransferLockOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/EnableDomainTransferLockInput";
export * from "../types/EnableDomainTransferLockOutput";
export * from "../types/EnableDomainTransferLockExceptionsUnion";

export class EnableDomainTransferLockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableDomainTransferLockInput,
      OutputTypesUnion,
      EnableDomainTransferLockOutput,
      Route53DomainsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableDomainTransferLock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableDomainTransferLockInput,
    EnableDomainTransferLockOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableDomainTransferLockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableDomainTransferLockInput,
    EnableDomainTransferLockOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableDomainTransferLockInput, EnableDomainTransferLockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
