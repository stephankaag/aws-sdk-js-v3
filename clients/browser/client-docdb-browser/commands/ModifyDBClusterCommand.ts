import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyDBCluster } from "../model/operations/ModifyDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBClusterInput } from "../types/ModifyDBClusterInput";
import { ModifyDBClusterOutput } from "../types/ModifyDBClusterOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/ModifyDBClusterInput";
export * from "../types/ModifyDBClusterOutput";
export * from "../types/ModifyDBClusterExceptionsUnion";

export class ModifyDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDBClusterInput,
      OutputTypesUnion,
      ModifyDBClusterOutput,
      DocDBResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBClusterInput,
    ModifyDBClusterOutput,
    Blob
  >();

  constructor(readonly input: ModifyDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyDBClusterInput, ModifyDBClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyDBClusterInput, ModifyDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
