import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output from the TransferCertificate operation.</p>
 */
export interface TransferCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the certificate.</p>
   */
  transferredCertificateArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
