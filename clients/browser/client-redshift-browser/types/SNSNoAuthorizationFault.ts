import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You do not have permission to publish to the specified Amazon SNS topic.</p>
 */
export interface SNSNoAuthorizationFault
  extends __ServiceException__<_SNSNoAuthorizationFaultDetails> {
  name: "SNSNoAuthorizationFault";
}

export interface _SNSNoAuthorizationFaultDetails {}
