import { _SensitiveStringList } from "./_SensitiveStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVoiceConnectorTerminationCredentialsInput: _Structure_ = {
  type: "structure",
  required: ["VoiceConnectorId"],
  members: {
    VoiceConnectorId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "voiceConnectorId"
    },
    Usernames: {
      shape: _SensitiveStringList
    }
  }
};
