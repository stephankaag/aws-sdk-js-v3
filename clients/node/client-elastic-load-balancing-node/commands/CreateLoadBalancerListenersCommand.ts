import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLoadBalancerListeners } from "../model/operations/CreateLoadBalancerListeners";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLoadBalancerListenersInput } from "../types/CreateLoadBalancerListenersInput";
import { CreateLoadBalancerListenersOutput } from "../types/CreateLoadBalancerListenersOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/CreateLoadBalancerListenersInput";
export * from "../types/CreateLoadBalancerListenersOutput";
export * from "../types/CreateLoadBalancerListenersExceptionsUnion";

export class CreateLoadBalancerListenersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLoadBalancerListenersInput,
      OutputTypesUnion,
      CreateLoadBalancerListenersOutput,
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLoadBalancerListeners;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLoadBalancerListenersInput,
    CreateLoadBalancerListenersOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLoadBalancerListenersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLoadBalancerListenersInput,
    CreateLoadBalancerListenersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateLoadBalancerListenersInput,
        CreateLoadBalancerListenersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
