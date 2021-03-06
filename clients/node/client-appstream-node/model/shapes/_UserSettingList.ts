import { List as _List_ } from "@aws-sdk/types";
import { _UserSetting } from "./_UserSetting";

export const _UserSettingList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _UserSetting
  }
};
