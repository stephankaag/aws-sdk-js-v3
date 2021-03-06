import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GlobalSignOut } from "../model/operations/GlobalSignOut";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GlobalSignOutInput } from "../types/GlobalSignOutInput";
import { GlobalSignOutOutput } from "../types/GlobalSignOutOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/GlobalSignOutInput";
export * from "../types/GlobalSignOutOutput";
export * from "../types/GlobalSignOutExceptionsUnion";

export class GlobalSignOutCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GlobalSignOutInput,
      OutputTypesUnion,
      GlobalSignOutOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = GlobalSignOut;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GlobalSignOutInput,
    GlobalSignOutOutput,
    Blob
  >();

  constructor(readonly input: GlobalSignOutInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<GlobalSignOutInput, GlobalSignOutOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        GlobalSignOutInput,
        GlobalSignOutOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<GlobalSignOutInput, GlobalSignOutOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
