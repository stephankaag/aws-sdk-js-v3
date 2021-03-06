import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDirectory } from "../model/operations/GetDirectory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDirectoryInput } from "../types/GetDirectoryInput";
import { GetDirectoryOutput } from "../types/GetDirectoryOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/GetDirectoryInput";
export * from "../types/GetDirectoryOutput";
export * from "../types/GetDirectoryExceptionsUnion";

export class GetDirectoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDirectoryInput,
      OutputTypesUnion,
      GetDirectoryOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = GetDirectory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDirectoryInput,
    GetDirectoryOutput,
    Blob
  >();

  constructor(readonly input: GetDirectoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDirectoryInput, GetDirectoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDirectoryInput, GetDirectoryOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
