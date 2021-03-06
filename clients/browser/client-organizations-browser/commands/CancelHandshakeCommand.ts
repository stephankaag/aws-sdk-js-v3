import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelHandshake } from "../model/operations/CancelHandshake";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelHandshakeInput } from "../types/CancelHandshakeInput";
import { CancelHandshakeOutput } from "../types/CancelHandshakeOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/CancelHandshakeInput";
export * from "../types/CancelHandshakeOutput";
export * from "../types/CancelHandshakeExceptionsUnion";

export class CancelHandshakeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelHandshakeInput,
      OutputTypesUnion,
      CancelHandshakeOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = CancelHandshake;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelHandshakeInput,
    CancelHandshakeOutput,
    Blob
  >();

  constructor(readonly input: CancelHandshakeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelHandshakeInput, CancelHandshakeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelHandshakeInput, CancelHandshakeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
