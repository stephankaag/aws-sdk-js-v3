import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDeployments } from "../model/operations/DescribeDeployments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDeploymentsInput } from "../types/DescribeDeploymentsInput";
import { DescribeDeploymentsOutput } from "../types/DescribeDeploymentsOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeDeploymentsInput";
export * from "../types/DescribeDeploymentsOutput";
export * from "../types/DescribeDeploymentsExceptionsUnion";

export class DescribeDeploymentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDeploymentsInput,
      OutputTypesUnion,
      DescribeDeploymentsOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDeployments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDeploymentsInput,
    DescribeDeploymentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDeploymentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDeploymentsInput,
    DescribeDeploymentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDeploymentsInput, DescribeDeploymentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
