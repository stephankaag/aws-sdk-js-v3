import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { Decrypt } from "../model/operations/Decrypt";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DecryptInput } from "../types/DecryptInput";
import { DecryptOutput } from "../types/DecryptOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/DecryptInput";
export * from "../types/DecryptOutput";
export * from "../types/DecryptExceptionsUnion";

export class DecryptCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DecryptInput,
      OutputTypesUnion,
      DecryptOutput,
      KMSResolvedConfiguration,
      Blob
    > {
  readonly model = Decrypt;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DecryptInput,
    DecryptOutput,
    Blob
  >();

  constructor(readonly input: DecryptInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<DecryptInput, DecryptOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DecryptInput, DecryptOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
