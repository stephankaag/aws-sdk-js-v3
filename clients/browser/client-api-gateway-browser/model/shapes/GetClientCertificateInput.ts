import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetClientCertificateInput: _Structure_ = {
  type: "structure",
  required: ["clientCertificateId"],
  members: {
    clientCertificateId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "clientcertificate_id"
    }
  }
};
