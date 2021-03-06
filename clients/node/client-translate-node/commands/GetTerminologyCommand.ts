import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTerminology } from "../model/operations/GetTerminology";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTerminologyInput } from "../types/GetTerminologyInput";
import { GetTerminologyOutput } from "../types/GetTerminologyOutput";
import { TranslateResolvedConfiguration } from "../TranslateConfiguration";
export * from "../types/GetTerminologyInput";
export * from "../types/GetTerminologyOutput";
export * from "../types/GetTerminologyExceptionsUnion";

export class GetTerminologyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTerminologyInput,
      OutputTypesUnion,
      GetTerminologyOutput,
      TranslateResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTerminology;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTerminologyInput,
    GetTerminologyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTerminologyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TranslateResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTerminologyInput, GetTerminologyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTerminologyInput, GetTerminologyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
