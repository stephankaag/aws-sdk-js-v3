import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TransactWriteItems } from "../model/operations/TransactWriteItems";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TransactWriteItemsInput } from "../types/TransactWriteItemsInput";
import { TransactWriteItemsOutput } from "../types/TransactWriteItemsOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/TransactWriteItemsInput";
export * from "../types/TransactWriteItemsOutput";
export * from "../types/TransactWriteItemsExceptionsUnion";

export class TransactWriteItemsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TransactWriteItemsInput,
      OutputTypesUnion,
      TransactWriteItemsOutput,
      DynamoDBResolvedConfiguration,
      Blob
    > {
  readonly model = TransactWriteItems;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TransactWriteItemsInput,
    TransactWriteItemsOutput,
    Blob
  >();

  constructor(readonly input: TransactWriteItemsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TransactWriteItemsInput,
    TransactWriteItemsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TransactWriteItemsInput, TransactWriteItemsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
