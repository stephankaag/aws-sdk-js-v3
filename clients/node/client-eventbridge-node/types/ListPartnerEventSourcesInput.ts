import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPartnerEventSourcesInput shape
 */
export interface ListPartnerEventSourcesInput {
  /**
   * <p>If you specify this, the results are limited to only those partner event sources that start with the string you specify.</p>
   */
  NamePrefix: string;

  /**
   * <p>The token returned by a previous call to this operation. Specifying this retrieves the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>pecifying this limits the number of results returned by this operation. The operation also returns a <code>NextToken</code> that you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  Limit?: number;

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
