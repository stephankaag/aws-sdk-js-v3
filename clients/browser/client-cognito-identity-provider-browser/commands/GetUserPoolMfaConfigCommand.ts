import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetUserPoolMfaConfig } from "../model/operations/GetUserPoolMfaConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUserPoolMfaConfigInput } from "../types/GetUserPoolMfaConfigInput";
import { GetUserPoolMfaConfigOutput } from "../types/GetUserPoolMfaConfigOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/GetUserPoolMfaConfigInput";
export * from "../types/GetUserPoolMfaConfigOutput";
export * from "../types/GetUserPoolMfaConfigExceptionsUnion";

export class GetUserPoolMfaConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUserPoolMfaConfigInput,
      OutputTypesUnion,
      GetUserPoolMfaConfigOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = GetUserPoolMfaConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUserPoolMfaConfigInput,
    GetUserPoolMfaConfigOutput,
    Blob
  >();

  constructor(readonly input: GetUserPoolMfaConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetUserPoolMfaConfigInput,
    GetUserPoolMfaConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        GetUserPoolMfaConfigInput,
        GetUserPoolMfaConfigOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<GetUserPoolMfaConfigInput, GetUserPoolMfaConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
