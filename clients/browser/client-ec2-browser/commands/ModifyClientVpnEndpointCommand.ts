import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyClientVpnEndpoint } from "../model/operations/ModifyClientVpnEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyClientVpnEndpointInput } from "../types/ModifyClientVpnEndpointInput";
import { ModifyClientVpnEndpointOutput } from "../types/ModifyClientVpnEndpointOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyClientVpnEndpointInput";
export * from "../types/ModifyClientVpnEndpointOutput";
export * from "../types/ModifyClientVpnEndpointExceptionsUnion";

export class ModifyClientVpnEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyClientVpnEndpointInput,
      OutputTypesUnion,
      ModifyClientVpnEndpointOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyClientVpnEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClientVpnEndpointInput,
    ModifyClientVpnEndpointOutput,
    Blob
  >();

  constructor(readonly input: ModifyClientVpnEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyClientVpnEndpointInput,
    ModifyClientVpnEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyClientVpnEndpointInput, ModifyClientVpnEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
