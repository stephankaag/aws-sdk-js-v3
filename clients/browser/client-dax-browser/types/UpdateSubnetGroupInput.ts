import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSubnetGroupInput shape
 */
export interface UpdateSubnetGroupInput {
  /**
   * <p>The name of the subnet group.</p>
   */
  SubnetGroupName: string;

  /**
   * <p>A description of the subnet group.</p>
   */
  Description?: string;

  /**
   * <p>A list of subnet IDs in the subnet group.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

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
