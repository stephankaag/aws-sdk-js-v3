import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListEntitlements } from "../model/operations/ListEntitlements";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEntitlementsInput } from "../types/ListEntitlementsInput";
import { ListEntitlementsOutput } from "../types/ListEntitlementsOutput";
import { MediaConnectResolvedConfiguration } from "../MediaConnectConfiguration";
export * from "../types/ListEntitlementsInput";
export * from "../types/ListEntitlementsOutput";
export * from "../types/ListEntitlementsExceptionsUnion";

export class ListEntitlementsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEntitlementsInput,
      OutputTypesUnion,
      ListEntitlementsOutput,
      MediaConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListEntitlements;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEntitlementsInput,
    ListEntitlementsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListEntitlementsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<ListEntitlementsInput, ListEntitlementsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEntitlementsInput, ListEntitlementsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
