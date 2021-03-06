import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchRead } from "../model/operations/BatchRead";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchReadInput } from "../types/BatchReadInput";
import { BatchReadOutput } from "../types/BatchReadOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/BatchReadInput";
export * from "../types/BatchReadOutput";
export * from "../types/BatchReadExceptionsUnion";

export class BatchReadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchReadInput,
      OutputTypesUnion,
      BatchReadOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = BatchRead;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchReadInput,
    BatchReadOutput,
    Blob
  >();

  constructor(readonly input: BatchReadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchReadInput, BatchReadOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchReadInput, BatchReadOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
