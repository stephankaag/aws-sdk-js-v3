import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeScalingActivities } from "../model/operations/DescribeScalingActivities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScalingActivitiesInput } from "../types/DescribeScalingActivitiesInput";
import { DescribeScalingActivitiesOutput } from "../types/DescribeScalingActivitiesOutput";
import { ApplicationAutoScalingResolvedConfiguration } from "../ApplicationAutoScalingConfiguration";
export * from "../types/DescribeScalingActivitiesInput";
export * from "../types/DescribeScalingActivitiesOutput";
export * from "../types/DescribeScalingActivitiesExceptionsUnion";

export class DescribeScalingActivitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScalingActivitiesInput,
      OutputTypesUnion,
      DescribeScalingActivitiesOutput,
      ApplicationAutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeScalingActivities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScalingActivitiesInput,
    DescribeScalingActivitiesOutput,
    Blob
  >();

  constructor(readonly input: DescribeScalingActivitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationAutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScalingActivitiesInput,
    DescribeScalingActivitiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeScalingActivitiesInput, DescribeScalingActivitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
