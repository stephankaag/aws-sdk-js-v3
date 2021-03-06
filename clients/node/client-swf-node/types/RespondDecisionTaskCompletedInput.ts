import { _Decision } from "./_Decision";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Input data for a TaskCompleted response to a decision task.</p>
 */
export interface RespondDecisionTaskCompletedInput {
  /**
   * <p>The <code>taskToken</code> from the <a>DecisionTask</a>.</p> <important> <p> <code>taskToken</code> is generated by the service and should be treated as an opaque value. If the task is passed to another process, its <code>taskToken</code> must also be passed. This enables it to provide its progress and respond with results.</p> </important>
   */
  taskToken: string;

  /**
   * <p>The list of decisions (possibly empty) made by the decider while processing this decision task. See the docs for the <a>Decision</a> structure for details.</p>
   */
  decisions?: Array<_Decision> | Iterable<_Decision>;

  /**
   * <p>User defined context to add to workflow execution.</p>
   */
  executionContext?: string;

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
