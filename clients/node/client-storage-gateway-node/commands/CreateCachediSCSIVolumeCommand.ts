import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCachediSCSIVolume } from "../model/operations/CreateCachediSCSIVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCachediSCSIVolumeInput } from "../types/CreateCachediSCSIVolumeInput";
import { CreateCachediSCSIVolumeOutput } from "../types/CreateCachediSCSIVolumeOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/CreateCachediSCSIVolumeInput";
export * from "../types/CreateCachediSCSIVolumeOutput";
export * from "../types/CreateCachediSCSIVolumeExceptionsUnion";

export class CreateCachediSCSIVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCachediSCSIVolumeInput,
      OutputTypesUnion,
      CreateCachediSCSIVolumeOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCachediSCSIVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCachediSCSIVolumeInput,
    CreateCachediSCSIVolumeOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCachediSCSIVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCachediSCSIVolumeInput,
    CreateCachediSCSIVolumeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCachediSCSIVolumeInput, CreateCachediSCSIVolumeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
