import { _UnmarshalledSystemTemplateSummary } from "./_SystemTemplateSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchSystemTemplatesOutput shape
 */
export interface SearchSystemTemplatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of objects that contain summary information about each system deployment in the result set.</p>
   */
  summaries?: Array<_UnmarshalledSystemTemplateSummary>;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
