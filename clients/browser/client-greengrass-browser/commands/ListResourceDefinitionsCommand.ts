import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResourceDefinitions } from "../model/operations/ListResourceDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourceDefinitionsInput } from "../types/ListResourceDefinitionsInput";
import { ListResourceDefinitionsOutput } from "../types/ListResourceDefinitionsOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListResourceDefinitionsInput";
export * from "../types/ListResourceDefinitionsOutput";
export * from "../types/ListResourceDefinitionsExceptionsUnion";

export class ListResourceDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourceDefinitionsInput,
      OutputTypesUnion,
      ListResourceDefinitionsOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = ListResourceDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourceDefinitionsInput,
    ListResourceDefinitionsOutput,
    Blob
  >();

  constructor(readonly input: ListResourceDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResourceDefinitionsInput,
    ListResourceDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResourceDefinitionsInput, ListResourceDefinitionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
