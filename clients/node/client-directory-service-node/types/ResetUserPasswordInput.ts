import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResetUserPasswordInput shape
 */
export interface ResetUserPasswordInput {
  /**
   * <p>Identifier of the AWS Managed Microsoft AD or Simple AD directory in which the user resides.</p>
   */
  DirectoryId: string;

  /**
   * <p>The user name of the user whose password will be reset.</p>
   */
  UserName: string;

  /**
   * <p>The new password that will be reset.</p>
   */
  NewPassword: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
