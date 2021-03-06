import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdatePortfolio } from "../model/operations/UpdatePortfolio";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePortfolioInput } from "../types/UpdatePortfolioInput";
import { UpdatePortfolioOutput } from "../types/UpdatePortfolioOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/UpdatePortfolioInput";
export * from "../types/UpdatePortfolioOutput";
export * from "../types/UpdatePortfolioExceptionsUnion";

export class UpdatePortfolioCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePortfolioInput,
      OutputTypesUnion,
      UpdatePortfolioOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdatePortfolio;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePortfolioInput,
    UpdatePortfolioOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdatePortfolioInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdatePortfolioInput, UpdatePortfolioOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePortfolioInput, UpdatePortfolioOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
