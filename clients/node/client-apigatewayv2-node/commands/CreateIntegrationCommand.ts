import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateIntegration } from "../model/operations/CreateIntegration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateIntegrationInput } from "../types/CreateIntegrationInput";
import { CreateIntegrationOutput } from "../types/CreateIntegrationOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/CreateIntegrationInput";
export * from "../types/CreateIntegrationOutput";
export * from "../types/CreateIntegrationExceptionsUnion";

export class CreateIntegrationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateIntegrationInput,
      OutputTypesUnion,
      CreateIntegrationOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateIntegration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateIntegrationInput,
    CreateIntegrationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateIntegrationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateIntegrationInput, CreateIntegrationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateIntegrationInput, CreateIntegrationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
