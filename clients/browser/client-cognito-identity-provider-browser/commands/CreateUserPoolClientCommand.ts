import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateUserPoolClient } from "../model/operations/CreateUserPoolClient";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUserPoolClientInput } from "../types/CreateUserPoolClientInput";
import { CreateUserPoolClientOutput } from "../types/CreateUserPoolClientOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/CreateUserPoolClientInput";
export * from "../types/CreateUserPoolClientOutput";
export * from "../types/CreateUserPoolClientExceptionsUnion";

export class CreateUserPoolClientCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUserPoolClientInput,
      OutputTypesUnion,
      CreateUserPoolClientOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = CreateUserPoolClient;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUserPoolClientInput,
    CreateUserPoolClientOutput,
    Blob
  >();

  constructor(readonly input: CreateUserPoolClientInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateUserPoolClientInput,
    CreateUserPoolClientOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        CreateUserPoolClientInput,
        CreateUserPoolClientOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<CreateUserPoolClientInput, CreateUserPoolClientOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
