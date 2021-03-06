import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListUserTags } from "../model/operations/ListUserTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUserTagsInput } from "../types/ListUserTagsInput";
import { ListUserTagsOutput } from "../types/ListUserTagsOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListUserTagsInput";
export * from "../types/ListUserTagsOutput";
export * from "../types/ListUserTagsExceptionsUnion";

export class ListUserTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUserTagsInput,
      OutputTypesUnion,
      ListUserTagsOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = ListUserTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUserTagsInput,
    ListUserTagsOutput,
    Blob
  >();

  constructor(readonly input: ListUserTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListUserTagsInput, ListUserTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListUserTagsInput, ListUserTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
