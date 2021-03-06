import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteOptionGroup } from "../model/operations/DeleteOptionGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteOptionGroupInput } from "../types/DeleteOptionGroupInput";
import { DeleteOptionGroupOutput } from "../types/DeleteOptionGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DeleteOptionGroupInput";
export * from "../types/DeleteOptionGroupOutput";
export * from "../types/DeleteOptionGroupExceptionsUnion";

export class DeleteOptionGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteOptionGroupInput,
      OutputTypesUnion,
      DeleteOptionGroupOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteOptionGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteOptionGroupInput,
    DeleteOptionGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteOptionGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteOptionGroupInput, DeleteOptionGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteOptionGroupInput, DeleteOptionGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
