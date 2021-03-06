import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListGroupMemberships } from "../model/operations/ListGroupMemberships";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroupMembershipsInput } from "../types/ListGroupMembershipsInput";
import { ListGroupMembershipsOutput } from "../types/ListGroupMembershipsOutput";
import { QuickSightResolvedConfiguration } from "../QuickSightConfiguration";
export * from "../types/ListGroupMembershipsInput";
export * from "../types/ListGroupMembershipsOutput";
export * from "../types/ListGroupMembershipsExceptionsUnion";

export class ListGroupMembershipsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGroupMembershipsInput,
      OutputTypesUnion,
      ListGroupMembershipsOutput,
      QuickSightResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListGroupMemberships;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroupMembershipsInput,
    ListGroupMembershipsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListGroupMembershipsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: QuickSightResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListGroupMembershipsInput,
    ListGroupMembershipsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGroupMembershipsInput, ListGroupMembershipsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
