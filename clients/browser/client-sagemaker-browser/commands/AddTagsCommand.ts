import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddTags } from "../model/operations/AddTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddTagsInput } from "../types/AddTagsInput";
import { AddTagsOutput } from "../types/AddTagsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/AddTagsInput";
export * from "../types/AddTagsOutput";
export * from "../types/AddTagsExceptionsUnion";

export class AddTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddTagsInput,
      OutputTypesUnion,
      AddTagsOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = AddTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddTagsInput,
    AddTagsOutput,
    Blob
  >();

  constructor(readonly input: AddTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<AddTagsInput, AddTagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddTagsInput, AddTagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
