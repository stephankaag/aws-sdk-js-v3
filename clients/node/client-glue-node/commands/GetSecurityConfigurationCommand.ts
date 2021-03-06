import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSecurityConfiguration } from "../model/operations/GetSecurityConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSecurityConfigurationInput } from "../types/GetSecurityConfigurationInput";
import { GetSecurityConfigurationOutput } from "../types/GetSecurityConfigurationOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetSecurityConfigurationInput";
export * from "../types/GetSecurityConfigurationOutput";
export * from "../types/GetSecurityConfigurationExceptionsUnion";

export class GetSecurityConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSecurityConfigurationInput,
      OutputTypesUnion,
      GetSecurityConfigurationOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSecurityConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSecurityConfigurationInput,
    GetSecurityConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSecurityConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSecurityConfigurationInput,
    GetSecurityConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSecurityConfigurationInput, GetSecurityConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
