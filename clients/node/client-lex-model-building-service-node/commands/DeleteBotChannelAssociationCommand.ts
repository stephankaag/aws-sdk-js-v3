import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBotChannelAssociation } from "../model/operations/DeleteBotChannelAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBotChannelAssociationInput } from "../types/DeleteBotChannelAssociationInput";
import { DeleteBotChannelAssociationOutput } from "../types/DeleteBotChannelAssociationOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/DeleteBotChannelAssociationInput";
export * from "../types/DeleteBotChannelAssociationOutput";
export * from "../types/DeleteBotChannelAssociationExceptionsUnion";

export class DeleteBotChannelAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBotChannelAssociationInput,
      OutputTypesUnion,
      DeleteBotChannelAssociationOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBotChannelAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBotChannelAssociationInput,
    DeleteBotChannelAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBotChannelAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBotChannelAssociationInput,
    DeleteBotChannelAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteBotChannelAssociationInput,
        DeleteBotChannelAssociationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
