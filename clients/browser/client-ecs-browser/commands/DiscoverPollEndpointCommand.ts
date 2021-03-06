import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DiscoverPollEndpoint } from "../model/operations/DiscoverPollEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DiscoverPollEndpointInput } from "../types/DiscoverPollEndpointInput";
import { DiscoverPollEndpointOutput } from "../types/DiscoverPollEndpointOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DiscoverPollEndpointInput";
export * from "../types/DiscoverPollEndpointOutput";
export * from "../types/DiscoverPollEndpointExceptionsUnion";

export class DiscoverPollEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DiscoverPollEndpointInput,
      OutputTypesUnion,
      DiscoverPollEndpointOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = DiscoverPollEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DiscoverPollEndpointInput,
    DiscoverPollEndpointOutput,
    Blob
  >();

  constructor(readonly input: DiscoverPollEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DiscoverPollEndpointInput,
    DiscoverPollEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DiscoverPollEndpointInput, DiscoverPollEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
