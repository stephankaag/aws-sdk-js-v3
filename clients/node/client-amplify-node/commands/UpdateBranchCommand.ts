import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateBranch } from "../model/operations/UpdateBranch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBranchInput } from "../types/UpdateBranchInput";
import { UpdateBranchOutput } from "../types/UpdateBranchOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/UpdateBranchInput";
export * from "../types/UpdateBranchOutput";
export * from "../types/UpdateBranchExceptionsUnion";

export class UpdateBranchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBranchInput,
      OutputTypesUnion,
      UpdateBranchOutput,
      AmplifyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateBranch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBranchInput,
    UpdateBranchOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateBranchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateBranchInput, UpdateBranchOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBranchInput, UpdateBranchOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
