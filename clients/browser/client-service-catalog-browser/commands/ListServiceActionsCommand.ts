import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListServiceActions } from "../model/operations/ListServiceActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListServiceActionsInput } from "../types/ListServiceActionsInput";
import { ListServiceActionsOutput } from "../types/ListServiceActionsOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListServiceActionsInput";
export * from "../types/ListServiceActionsOutput";
export * from "../types/ListServiceActionsExceptionsUnion";

export class ListServiceActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListServiceActionsInput,
      OutputTypesUnion,
      ListServiceActionsOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = ListServiceActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListServiceActionsInput,
    ListServiceActionsOutput,
    Blob
  >();

  constructor(readonly input: ListServiceActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListServiceActionsInput,
    ListServiceActionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListServiceActionsInput, ListServiceActionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
