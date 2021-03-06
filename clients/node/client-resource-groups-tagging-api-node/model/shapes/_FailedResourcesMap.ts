import { Map as _Map_ } from "@aws-sdk/types";
import { _FailureInfo } from "./_FailureInfo";

export const _FailedResourcesMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _FailureInfo
  }
};
