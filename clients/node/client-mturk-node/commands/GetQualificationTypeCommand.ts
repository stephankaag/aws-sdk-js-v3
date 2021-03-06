import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetQualificationType } from "../model/operations/GetQualificationType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetQualificationTypeInput } from "../types/GetQualificationTypeInput";
import { GetQualificationTypeOutput } from "../types/GetQualificationTypeOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/GetQualificationTypeInput";
export * from "../types/GetQualificationTypeOutput";
export * from "../types/GetQualificationTypeExceptionsUnion";

export class GetQualificationTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetQualificationTypeInput,
      OutputTypesUnion,
      GetQualificationTypeOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetQualificationType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetQualificationTypeInput,
    GetQualificationTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetQualificationTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetQualificationTypeInput,
    GetQualificationTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetQualificationTypeInput, GetQualificationTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
