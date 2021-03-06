import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetConnectionStatus } from "../model/operations/GetConnectionStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConnectionStatusInput } from "../types/GetConnectionStatusInput";
import { GetConnectionStatusOutput } from "../types/GetConnectionStatusOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetConnectionStatusInput";
export * from "../types/GetConnectionStatusOutput";
export * from "../types/GetConnectionStatusExceptionsUnion";

export class GetConnectionStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConnectionStatusInput,
      OutputTypesUnion,
      GetConnectionStatusOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetConnectionStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConnectionStatusInput,
    GetConnectionStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetConnectionStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetConnectionStatusInput,
    GetConnectionStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConnectionStatusInput, GetConnectionStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
