import { _UnmarshalledIamInstanceProfileAssociation } from "./_IamInstanceProfileAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateIamInstanceProfileOutput shape
 */
export interface AssociateIamInstanceProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the IAM instance profile association.</p>
   */
  IamInstanceProfileAssociation?: _UnmarshalledIamInstanceProfileAssociation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
