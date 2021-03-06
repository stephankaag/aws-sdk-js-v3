import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTable } from "../model/operations/DeleteTable";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTableInput } from "../types/DeleteTableInput";
import { DeleteTableOutput } from "../types/DeleteTableOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/DeleteTableInput";
export * from "../types/DeleteTableOutput";
export * from "../types/DeleteTableExceptionsUnion";

export class DeleteTableCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTableInput,
      OutputTypesUnion,
      DeleteTableOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTable;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTableInput,
    DeleteTableOutput,
    Blob
  >();

  constructor(readonly input: DeleteTableInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTableInput, DeleteTableOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTableInput, DeleteTableOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
