import { _RefreshSchemasStatus } from "./_RefreshSchemasStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRefreshSchemasStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RefreshSchemasStatus: {
      shape: _RefreshSchemasStatus
    }
  }
};
