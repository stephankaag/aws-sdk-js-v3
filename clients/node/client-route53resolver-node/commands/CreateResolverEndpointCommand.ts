import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateResolverEndpoint } from "../model/operations/CreateResolverEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResolverEndpointInput } from "../types/CreateResolverEndpointInput";
import { CreateResolverEndpointOutput } from "../types/CreateResolverEndpointOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/CreateResolverEndpointInput";
export * from "../types/CreateResolverEndpointOutput";
export * from "../types/CreateResolverEndpointExceptionsUnion";

export class CreateResolverEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResolverEndpointInput,
      OutputTypesUnion,
      CreateResolverEndpointOutput,
      Route53ResolverResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateResolverEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResolverEndpointInput,
    CreateResolverEndpointOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateResolverEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateResolverEndpointInput,
    CreateResolverEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateResolverEndpointInput, CreateResolverEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
