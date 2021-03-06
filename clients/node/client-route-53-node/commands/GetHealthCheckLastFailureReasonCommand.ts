import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetHealthCheckLastFailureReason } from "../model/operations/GetHealthCheckLastFailureReason";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHealthCheckLastFailureReasonInput } from "../types/GetHealthCheckLastFailureReasonInput";
import { GetHealthCheckLastFailureReasonOutput } from "../types/GetHealthCheckLastFailureReasonOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetHealthCheckLastFailureReasonInput";
export * from "../types/GetHealthCheckLastFailureReasonOutput";
export * from "../types/GetHealthCheckLastFailureReasonExceptionsUnion";

export class GetHealthCheckLastFailureReasonCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHealthCheckLastFailureReasonInput,
      OutputTypesUnion,
      GetHealthCheckLastFailureReasonOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetHealthCheckLastFailureReason;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHealthCheckLastFailureReasonInput,
    GetHealthCheckLastFailureReasonOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetHealthCheckLastFailureReasonInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetHealthCheckLastFailureReasonInput,
    GetHealthCheckLastFailureReasonOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetHealthCheckLastFailureReasonInput,
        GetHealthCheckLastFailureReasonOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
