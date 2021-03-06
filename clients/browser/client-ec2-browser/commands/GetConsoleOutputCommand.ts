import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetConsoleOutput } from "../model/operations/GetConsoleOutput";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConsoleOutputInput } from "../types/GetConsoleOutputInput";
import { GetConsoleOutputOutput } from "../types/GetConsoleOutputOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetConsoleOutputInput";
export * from "../types/GetConsoleOutputOutput";
export * from "../types/GetConsoleOutputExceptionsUnion";

export class GetConsoleOutputCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConsoleOutputInput,
      OutputTypesUnion,
      GetConsoleOutputOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetConsoleOutput;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConsoleOutputInput,
    GetConsoleOutputOutput,
    Blob
  >();

  constructor(readonly input: GetConsoleOutputInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetConsoleOutputInput, GetConsoleOutputOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConsoleOutputInput, GetConsoleOutputOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
