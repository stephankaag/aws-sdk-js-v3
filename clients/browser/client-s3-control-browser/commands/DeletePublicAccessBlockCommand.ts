import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePublicAccessBlock } from "../model/operations/DeletePublicAccessBlock";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePublicAccessBlockInput } from "../types/DeletePublicAccessBlockInput";
import { DeletePublicAccessBlockOutput } from "../types/DeletePublicAccessBlockOutput";
import { S3ControlResolvedConfiguration } from "../S3ControlConfiguration";
export * from "../types/DeletePublicAccessBlockInput";
export * from "../types/DeletePublicAccessBlockOutput";
export * from "../types/DeletePublicAccessBlockExceptionsUnion";

export class DeletePublicAccessBlockCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePublicAccessBlockInput,
      OutputTypesUnion,
      DeletePublicAccessBlockOutput,
      S3ControlResolvedConfiguration,
      Blob
    > {
  readonly model = DeletePublicAccessBlock;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePublicAccessBlockInput,
    DeletePublicAccessBlockOutput,
    Blob
  >();

  constructor(readonly input: DeletePublicAccessBlockInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ControlResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePublicAccessBlockInput,
    DeletePublicAccessBlockOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePublicAccessBlockInput, DeletePublicAccessBlockOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
