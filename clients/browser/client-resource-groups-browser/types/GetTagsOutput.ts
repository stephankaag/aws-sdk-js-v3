import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTagsOutput shape
 */
export interface GetTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the tagged resource group.</p>
   */
  Arn?: string;

  /**
   * <p>The tags associated with the specified resource group.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
