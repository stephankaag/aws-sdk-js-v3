import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProvisioningParameters } from "../model/operations/DescribeProvisioningParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProvisioningParametersInput } from "../types/DescribeProvisioningParametersInput";
import { DescribeProvisioningParametersOutput } from "../types/DescribeProvisioningParametersOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeProvisioningParametersInput";
export * from "../types/DescribeProvisioningParametersOutput";
export * from "../types/DescribeProvisioningParametersExceptionsUnion";

export class DescribeProvisioningParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProvisioningParametersInput,
      OutputTypesUnion,
      DescribeProvisioningParametersOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeProvisioningParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProvisioningParametersInput,
    DescribeProvisioningParametersOutput,
    Blob
  >();

  constructor(readonly input: DescribeProvisioningParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProvisioningParametersInput,
    DescribeProvisioningParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeProvisioningParametersInput,
        DescribeProvisioningParametersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
