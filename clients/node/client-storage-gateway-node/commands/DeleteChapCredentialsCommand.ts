import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteChapCredentials } from "../model/operations/DeleteChapCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteChapCredentialsInput } from "../types/DeleteChapCredentialsInput";
import { DeleteChapCredentialsOutput } from "../types/DeleteChapCredentialsOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DeleteChapCredentialsInput";
export * from "../types/DeleteChapCredentialsOutput";
export * from "../types/DeleteChapCredentialsExceptionsUnion";

export class DeleteChapCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteChapCredentialsInput,
      OutputTypesUnion,
      DeleteChapCredentialsOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteChapCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteChapCredentialsInput,
    DeleteChapCredentialsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteChapCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteChapCredentialsInput,
    DeleteChapCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteChapCredentialsInput, DeleteChapCredentialsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
