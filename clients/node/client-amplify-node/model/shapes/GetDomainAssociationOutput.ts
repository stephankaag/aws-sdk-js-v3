import { _DomainAssociation } from "./_DomainAssociation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainAssociationOutput: _Structure_ = {
  type: "structure",
  required: ["domainAssociation"],
  members: {
    domainAssociation: {
      shape: _DomainAssociation
    }
  }
};
