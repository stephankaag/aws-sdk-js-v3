import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopyFpgaImageOutput shape
 */
export interface CopyFpgaImageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the new AFI.</p>
   */
  FpgaImageId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
