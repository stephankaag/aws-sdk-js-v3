import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDirectoryConfig } from "../model/operations/CreateDirectoryConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDirectoryConfigInput } from "../types/CreateDirectoryConfigInput";
import { CreateDirectoryConfigOutput } from "../types/CreateDirectoryConfigOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/CreateDirectoryConfigInput";
export * from "../types/CreateDirectoryConfigOutput";
export * from "../types/CreateDirectoryConfigExceptionsUnion";

export class CreateDirectoryConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDirectoryConfigInput,
      OutputTypesUnion,
      CreateDirectoryConfigOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDirectoryConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDirectoryConfigInput,
    CreateDirectoryConfigOutput,
    Blob
  >();

  constructor(readonly input: CreateDirectoryConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDirectoryConfigInput,
    CreateDirectoryConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDirectoryConfigInput, CreateDirectoryConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
