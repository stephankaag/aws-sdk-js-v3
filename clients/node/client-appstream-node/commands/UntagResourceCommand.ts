import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UntagResource } from "../model/operations/UntagResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagResourceInput } from "../types/UntagResourceInput";
import { UntagResourceOutput } from "../types/UntagResourceOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/UntagResourceInput";
export * from "../types/UntagResourceOutput";
export * from "../types/UntagResourceExceptionsUnion";

export class UntagResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagResourceInput,
      OutputTypesUnion,
      UntagResourceOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UntagResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagResourceInput,
    UntagResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: UntagResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagResourceInput, UntagResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagResourceInput, UntagResourceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
