import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteUsagePlanKey } from "../model/operations/DeleteUsagePlanKey";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUsagePlanKeyInput } from "../types/DeleteUsagePlanKeyInput";
import { DeleteUsagePlanKeyOutput } from "../types/DeleteUsagePlanKeyOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteUsagePlanKeyInput";
export * from "../types/DeleteUsagePlanKeyOutput";
export * from "../types/DeleteUsagePlanKeyExceptionsUnion";

export class DeleteUsagePlanKeyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUsagePlanKeyInput,
      OutputTypesUnion,
      DeleteUsagePlanKeyOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteUsagePlanKey;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUsagePlanKeyInput,
    DeleteUsagePlanKeyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteUsagePlanKeyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteUsagePlanKeyInput,
    DeleteUsagePlanKeyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUsagePlanKeyInput, DeleteUsagePlanKeyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
