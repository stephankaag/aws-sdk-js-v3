import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the specified entity or resource can't be found.</p>
 */
export interface KMSNotFoundException
  extends __ServiceException__<_KMSNotFoundExceptionDetails> {
  name: "KMSNotFoundException";
}

export interface _KMSNotFoundExceptionDetails {
  /**
   * __string shape
   */
  message?: string;
}
