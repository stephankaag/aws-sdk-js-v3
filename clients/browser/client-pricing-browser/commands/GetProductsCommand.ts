import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetProducts } from "../model/operations/GetProducts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetProductsInput } from "../types/GetProductsInput";
import { GetProductsOutput } from "../types/GetProductsOutput";
import { PricingResolvedConfiguration } from "../PricingConfiguration";
export * from "../types/GetProductsInput";
export * from "../types/GetProductsOutput";
export * from "../types/GetProductsExceptionsUnion";

export class GetProductsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetProductsInput,
      OutputTypesUnion,
      GetProductsOutput,
      PricingResolvedConfiguration,
      Blob
    > {
  readonly model = GetProducts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetProductsInput,
    GetProductsOutput,
    Blob
  >();

  constructor(readonly input: GetProductsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PricingResolvedConfiguration
  ): __aws_sdk_types.Handler<GetProductsInput, GetProductsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetProductsInput, GetProductsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
