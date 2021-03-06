import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RequestSpotFleet } from "../model/operations/RequestSpotFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RequestSpotFleetInput } from "../types/RequestSpotFleetInput";
import { RequestSpotFleetOutput } from "../types/RequestSpotFleetOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RequestSpotFleetInput";
export * from "../types/RequestSpotFleetOutput";
export * from "../types/RequestSpotFleetExceptionsUnion";

export class RequestSpotFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RequestSpotFleetInput,
      OutputTypesUnion,
      RequestSpotFleetOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RequestSpotFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RequestSpotFleetInput,
    RequestSpotFleetOutput,
    _stream.Readable
  >();

  constructor(readonly input: RequestSpotFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<RequestSpotFleetInput, RequestSpotFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RequestSpotFleetInput, RequestSpotFleetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
