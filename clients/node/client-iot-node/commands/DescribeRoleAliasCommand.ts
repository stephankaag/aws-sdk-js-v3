import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeRoleAlias } from "../model/operations/DescribeRoleAlias";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRoleAliasInput } from "../types/DescribeRoleAliasInput";
import { DescribeRoleAliasOutput } from "../types/DescribeRoleAliasOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeRoleAliasInput";
export * from "../types/DescribeRoleAliasOutput";
export * from "../types/DescribeRoleAliasExceptionsUnion";

export class DescribeRoleAliasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRoleAliasInput,
      OutputTypesUnion,
      DescribeRoleAliasOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeRoleAlias;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRoleAliasInput,
    DescribeRoleAliasOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeRoleAliasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeRoleAliasInput, DescribeRoleAliasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRoleAliasInput, DescribeRoleAliasOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
