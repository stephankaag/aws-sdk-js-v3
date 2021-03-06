import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSkillGroup } from "../model/operations/GetSkillGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSkillGroupInput } from "../types/GetSkillGroupInput";
import { GetSkillGroupOutput } from "../types/GetSkillGroupOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/GetSkillGroupInput";
export * from "../types/GetSkillGroupOutput";
export * from "../types/GetSkillGroupExceptionsUnion";

export class GetSkillGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSkillGroupInput,
      OutputTypesUnion,
      GetSkillGroupOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSkillGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSkillGroupInput,
    GetSkillGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSkillGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSkillGroupInput, GetSkillGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSkillGroupInput, GetSkillGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
