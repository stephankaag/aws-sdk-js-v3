import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteObject } from "../model/operations/DeleteObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteObjectInput } from "../types/DeleteObjectInput";
import { DeleteObjectOutput } from "../types/DeleteObjectOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/DeleteObjectInput";
export * from "../types/DeleteObjectOutput";
export * from "../types/DeleteObjectExceptionsUnion";

export class DeleteObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteObjectInput,
      OutputTypesUnion,
      DeleteObjectOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteObjectInput,
    DeleteObjectOutput,
    Blob
  >();

  constructor(readonly input: DeleteObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteObjectInput, DeleteObjectOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteObjectInput, DeleteObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
