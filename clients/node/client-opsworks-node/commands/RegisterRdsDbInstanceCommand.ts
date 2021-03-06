import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterRdsDbInstance } from "../model/operations/RegisterRdsDbInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterRdsDbInstanceInput } from "../types/RegisterRdsDbInstanceInput";
import { RegisterRdsDbInstanceOutput } from "../types/RegisterRdsDbInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/RegisterRdsDbInstanceInput";
export * from "../types/RegisterRdsDbInstanceOutput";
export * from "../types/RegisterRdsDbInstanceExceptionsUnion";

export class RegisterRdsDbInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterRdsDbInstanceInput,
      OutputTypesUnion,
      RegisterRdsDbInstanceOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterRdsDbInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterRdsDbInstanceInput,
    RegisterRdsDbInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterRdsDbInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterRdsDbInstanceInput,
    RegisterRdsDbInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterRdsDbInstanceInput, RegisterRdsDbInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
