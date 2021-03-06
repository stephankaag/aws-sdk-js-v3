import { _ReplicationInstance } from "./_ReplicationInstance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteReplicationInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationInstance: {
      shape: _ReplicationInstance
    }
  }
};
