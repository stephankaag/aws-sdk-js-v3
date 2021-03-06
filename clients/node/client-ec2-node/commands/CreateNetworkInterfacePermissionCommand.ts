import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateNetworkInterfacePermission } from "../model/operations/CreateNetworkInterfacePermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNetworkInterfacePermissionInput } from "../types/CreateNetworkInterfacePermissionInput";
import { CreateNetworkInterfacePermissionOutput } from "../types/CreateNetworkInterfacePermissionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateNetworkInterfacePermissionInput";
export * from "../types/CreateNetworkInterfacePermissionOutput";
export * from "../types/CreateNetworkInterfacePermissionExceptionsUnion";

export class CreateNetworkInterfacePermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNetworkInterfacePermissionInput,
      OutputTypesUnion,
      CreateNetworkInterfacePermissionOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateNetworkInterfacePermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNetworkInterfacePermissionInput,
    CreateNetworkInterfacePermissionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateNetworkInterfacePermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateNetworkInterfacePermissionInput,
    CreateNetworkInterfacePermissionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateNetworkInterfacePermissionInput,
        CreateNetworkInterfacePermissionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
