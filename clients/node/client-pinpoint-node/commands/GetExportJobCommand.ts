import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetExportJob } from "../model/operations/GetExportJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetExportJobInput } from "../types/GetExportJobInput";
import { GetExportJobOutput } from "../types/GetExportJobOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetExportJobInput";
export * from "../types/GetExportJobOutput";
export * from "../types/GetExportJobExceptionsUnion";

export class GetExportJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetExportJobInput,
      OutputTypesUnion,
      GetExportJobOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetExportJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetExportJobInput,
    GetExportJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetExportJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetExportJobInput, GetExportJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetExportJobInput, GetExportJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
