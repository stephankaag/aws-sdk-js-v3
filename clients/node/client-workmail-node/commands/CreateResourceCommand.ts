import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateResource } from "../model/operations/CreateResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResourceInput } from "../types/CreateResourceInput";
import { CreateResourceOutput } from "../types/CreateResourceOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/CreateResourceInput";
export * from "../types/CreateResourceOutput";
export * from "../types/CreateResourceExceptionsUnion";

export class CreateResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResourceInput,
      OutputTypesUnion,
      CreateResourceOutput,
      WorkMailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResourceInput,
    CreateResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateResourceInput, CreateResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateResourceInput, CreateResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
