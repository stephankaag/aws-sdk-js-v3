import { _ServiceSetting } from "./_ServiceSetting";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetServiceSettingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceSetting: {
      shape: _ServiceSetting
    }
  }
};
