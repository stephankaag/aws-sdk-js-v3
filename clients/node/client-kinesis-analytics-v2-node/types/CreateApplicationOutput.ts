import { _UnmarshalledApplicationDetail } from "./_ApplicationDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateApplicationOutput shape
 */
export interface CreateApplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>In response to your <code>CreateApplication</code> request, Kinesis Data Analytics returns a response with details of the application it created.</p>
   */
  ApplicationDetail: _UnmarshalledApplicationDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
