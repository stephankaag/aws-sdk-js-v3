import { _UnmarshalledSecurityGroup } from "./_SecurityGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSecurityGroupsOutput shape
 */
export interface DescribeSecurityGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the security groups.</p>
   */
  SecurityGroups?: Array<_UnmarshalledSecurityGroup>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
