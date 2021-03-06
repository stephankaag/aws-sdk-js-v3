import { _IpPermission } from "./_IpPermission";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a request action.</p>
 */
export interface UpdateFleetPortSettingsInput {
  /**
   * <p>Unique identifier for a fleet to update port settings for.</p>
   */
  FleetId: string;

  /**
   * <p>Collection of port settings to be added to the fleet record.</p>
   */
  InboundPermissionAuthorizations?:
    | Array<_IpPermission>
    | Iterable<_IpPermission>;

  /**
   * <p>Collection of port settings to be removed from the fleet record.</p>
   */
  InboundPermissionRevocations?: Array<_IpPermission> | Iterable<_IpPermission>;

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
