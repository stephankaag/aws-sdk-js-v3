import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateConfig } from "../model/operations/UpdateConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConfigInput } from "../types/UpdateConfigInput";
import { UpdateConfigOutput } from "../types/UpdateConfigOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/UpdateConfigInput";
export * from "../types/UpdateConfigOutput";
export * from "../types/UpdateConfigExceptionsUnion";

export class UpdateConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConfigInput,
      OutputTypesUnion,
      UpdateConfigOutput,
      GroundStationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConfigInput,
    UpdateConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateConfigInput, UpdateConfigOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateConfigInput, UpdateConfigOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
