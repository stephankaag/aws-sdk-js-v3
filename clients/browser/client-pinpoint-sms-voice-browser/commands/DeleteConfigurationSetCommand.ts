import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConfigurationSet } from "../model/operations/DeleteConfigurationSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConfigurationSetInput } from "../types/DeleteConfigurationSetInput";
import { DeleteConfigurationSetOutput } from "../types/DeleteConfigurationSetOutput";
import { PinpointSMSVoiceResolvedConfiguration } from "../PinpointSMSVoiceConfiguration";
export * from "../types/DeleteConfigurationSetInput";
export * from "../types/DeleteConfigurationSetOutput";
export * from "../types/DeleteConfigurationSetExceptionsUnion";

export class DeleteConfigurationSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConfigurationSetInput,
      OutputTypesUnion,
      DeleteConfigurationSetOutput,
      PinpointSMSVoiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteConfigurationSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConfigurationSetInput,
    DeleteConfigurationSetOutput,
    Blob
  >();

  constructor(readonly input: DeleteConfigurationSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointSMSVoiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteConfigurationSetInput,
    DeleteConfigurationSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteConfigurationSetInput, DeleteConfigurationSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
