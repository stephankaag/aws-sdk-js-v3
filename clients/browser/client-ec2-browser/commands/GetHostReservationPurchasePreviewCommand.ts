import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetHostReservationPurchasePreview } from "../model/operations/GetHostReservationPurchasePreview";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHostReservationPurchasePreviewInput } from "../types/GetHostReservationPurchasePreviewInput";
import { GetHostReservationPurchasePreviewOutput } from "../types/GetHostReservationPurchasePreviewOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetHostReservationPurchasePreviewInput";
export * from "../types/GetHostReservationPurchasePreviewOutput";
export * from "../types/GetHostReservationPurchasePreviewExceptionsUnion";

export class GetHostReservationPurchasePreviewCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHostReservationPurchasePreviewInput,
      OutputTypesUnion,
      GetHostReservationPurchasePreviewOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = GetHostReservationPurchasePreview;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHostReservationPurchasePreviewInput,
    GetHostReservationPurchasePreviewOutput,
    Blob
  >();

  constructor(readonly input: GetHostReservationPurchasePreviewInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetHostReservationPurchasePreviewInput,
    GetHostReservationPurchasePreviewOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetHostReservationPurchasePreviewInput,
        GetHostReservationPurchasePreviewOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
