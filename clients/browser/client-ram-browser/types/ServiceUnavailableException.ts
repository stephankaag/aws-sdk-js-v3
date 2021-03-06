import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service is not available.</p>
 */
export interface ServiceUnavailableException
  extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
  name: "ServiceUnavailableException";
}

export interface _ServiceUnavailableExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
