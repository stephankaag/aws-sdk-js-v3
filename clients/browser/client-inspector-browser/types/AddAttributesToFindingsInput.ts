import { _Attribute } from "./_Attribute";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddAttributesToFindingsInput shape
 */
export interface AddAttributesToFindingsInput {
  /**
   * <p>The ARNs that specify the findings that you want to assign attributes to.</p>
   */
  findingArns: Array<string> | Iterable<string>;

  /**
   * <p>The array of attributes that you want to assign to specified findings.</p>
   */
  attributes: Array<_Attribute> | Iterable<_Attribute>;

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
