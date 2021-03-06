import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddClientIDToOpenIDConnectProvider } from "../model/operations/AddClientIDToOpenIDConnectProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddClientIDToOpenIDConnectProviderInput } from "../types/AddClientIDToOpenIDConnectProviderInput";
import { AddClientIDToOpenIDConnectProviderOutput } from "../types/AddClientIDToOpenIDConnectProviderOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/AddClientIDToOpenIDConnectProviderInput";
export * from "../types/AddClientIDToOpenIDConnectProviderOutput";
export * from "../types/AddClientIDToOpenIDConnectProviderExceptionsUnion";

export class AddClientIDToOpenIDConnectProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddClientIDToOpenIDConnectProviderInput,
      OutputTypesUnion,
      AddClientIDToOpenIDConnectProviderOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = AddClientIDToOpenIDConnectProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddClientIDToOpenIDConnectProviderInput,
    AddClientIDToOpenIDConnectProviderOutput,
    Blob
  >();

  constructor(readonly input: AddClientIDToOpenIDConnectProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddClientIDToOpenIDConnectProviderInput,
    AddClientIDToOpenIDConnectProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AddClientIDToOpenIDConnectProviderInput,
        AddClientIDToOpenIDConnectProviderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
