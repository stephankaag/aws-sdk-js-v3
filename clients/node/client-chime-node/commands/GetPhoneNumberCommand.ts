import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPhoneNumber } from "../model/operations/GetPhoneNumber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPhoneNumberInput } from "../types/GetPhoneNumberInput";
import { GetPhoneNumberOutput } from "../types/GetPhoneNumberOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/GetPhoneNumberInput";
export * from "../types/GetPhoneNumberOutput";
export * from "../types/GetPhoneNumberExceptionsUnion";

export class GetPhoneNumberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPhoneNumberInput,
      OutputTypesUnion,
      GetPhoneNumberOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPhoneNumber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPhoneNumberInput,
    GetPhoneNumberOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPhoneNumberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPhoneNumberInput, GetPhoneNumberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPhoneNumberInput, GetPhoneNumberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
