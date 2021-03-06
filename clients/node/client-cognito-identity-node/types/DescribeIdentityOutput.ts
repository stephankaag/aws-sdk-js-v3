import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A description of the identity.</p>
 */
export interface DescribeIdentityOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>The provider names.</p>
   */
  Logins?: Array<string>;

  /**
   * <p>Date on which the identity was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Date on which the identity was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
