import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAutoScalingGroupsInput shape
 */
export interface DescribeAutoScalingGroupsInput {
  /**
   * <p>The names of the Auto Scaling groups. Each name can be a maximum of 1600 characters. By default, you can only specify up to 50 names. You can optionally increase this limit using the <code>MaxRecords</code> parameter. </p> <p>If you omit this parameter, all Auto Scaling groups are described.</p>
   */
  AutoScalingGroupNames?: Array<string> | Iterable<string>;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>. </p>
   */
  MaxRecords?: number;

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
