import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddCache } from "../model/operations/AddCache";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddCacheInput } from "../types/AddCacheInput";
import { AddCacheOutput } from "../types/AddCacheOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/AddCacheInput";
export * from "../types/AddCacheOutput";
export * from "../types/AddCacheExceptionsUnion";

export class AddCacheCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddCacheInput,
      OutputTypesUnion,
      AddCacheOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddCache;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddCacheInput,
    AddCacheOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddCacheInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<AddCacheInput, AddCacheOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddCacheInput, AddCacheOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
