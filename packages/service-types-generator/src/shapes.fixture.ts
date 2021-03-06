import {
  TreeModel,
  TreeModelList,
  TreeModelMap,
  TreeModelShape,
  TreeModelString,
  TreeModelStructure,
  TreeModelMember
} from "@aws-sdk/build-types";
import { ServiceMetadata } from "@aws-sdk/types";

export const scalarTypes = new Set<
  "blob" | "boolean" | "number" | "string" | "timestamp"
>(["blob", "boolean", "number", "string", "timestamp"]);

export const NonStreamingBlob: TreeModelShape = {
  type: "blob",
  name: "NonStreamingBlob",
  documentation: "Binary data that is not streaming"
};

export const StreamingBlob: TreeModelShape = {
  type: "blob",
  streaming: true,
  name: "StreamingBlob",
  documentation: "Binary data that is streaming"
};

const ConsumedCapacity: TreeModelStructure = {
  type: "structure",
  name: "ConsumedCapacity",
  documentation: "Capacity consumed",
  members: {},
  required: []
};

export const ResourceId: TreeModelString = {
  type: "string",
  name: "ResourceId",
  documentation: "ID of a resource"
};

const DeleteResourceInput: TreeModelStructure = {
  type: "structure",
  name: "DeleteResourceInput",
  documentation: "Input for DeleteResource",
  required: ["resourceId"],
  topLevel: "input",
  members: {
    resourceId: {
      shape: ResourceId
    }
  }
};

const DeleteResourceOutput: TreeModelStructure = {
  type: "structure",
  name: "DeleteResourceOutput",
  documentation: "Output for DeleteResource",
  required: [],
  topLevel: "output",
  members: {}
};

let ItemComponents: TreeModelList = {
  type: "list",
  name: "ItemComponents",
  documentation: "List of Component descriptions",
  member: {} as TreeModelMember
};

const ComponentDescription: TreeModelStructure = {
  type: "structure",
  name: "ComponentDescription",
  documentation: "Description of component",
  required: [],
  members: {
    Components: { shape: ItemComponents },
    Description: {
      shape: {
        name: "Description",
        type: "string",
        documentation: "Description for component"
      }
    }
  }
};

ItemComponents.member = { shape: ComponentDescription };

const DescribeItemInput: TreeModelStructure = {
  type: "structure",
  name: "DescribeItemInput",
  documentation: "Input for DescribeItemInput",
  required: [],
  topLevel: "input",
  members: {}
};

export const DescribeItemOutput: TreeModelStructure = {
  type: "structure",
  name: "DescribeItemOutput",
  documentation: "Output for DescribeItemInput",
  required: [],
  topLevel: "output",
  members: {
    Description: { shape: ItemComponents }
  }
};

const GetResourceInput: TreeModelStructure = {
  type: "structure",
  name: "GetResourceInput",
  documentation: "Input for GetResource",
  required: ["resourceId"],
  topLevel: "input",
  members: {
    resourceId: {
      shape: ResourceId
    }
  }
};

export const GetResourceOutput: TreeModelStructure = {
  type: "structure",
  name: "GetResourceOutput",
  documentation: "Output for GetResource",
  required: [],
  topLevel: "output",
  members: {
    data: {
      shape: StreamingBlob
    }
  },
  payload: "data"
};

const NodeId: TreeModelShape = {
  type: "string",
  name: "NodeId",
  documentation: "ID of a node"
};

export const NodeList: TreeModelList = {
  type: "list",
  name: "NodeList",
  documentation: "List of nodes",
  member: { shape: NodeId }
};

export const PrimaryLocationMap: TreeModelMap = {
  type: "map",
  name: "PrimaryLocationMap",
  documentation: "Map of resource identifiers to node IDs",
  key: { shape: ResourceId },
  value: { shape: NodeId }
};

export const PutResourceInput: TreeModelStructure = {
  type: "structure",
  name: "PutResourceInput",
  documentation: "Input for PutResource",
  required: ["resourceId", "data"],
  topLevel: "input",
  members: {
    resourceId: {
      shape: ResourceId
    },
    data: {
      shape: StreamingBlob
    }
  },
  payload: "data"
};

const PutResourceOutput: TreeModelStructure = {
  type: "structure",
  name: "PutResourceOutput",
  documentation: "Output for PutResource",
  required: [],
  topLevel: "output",
  members: {
    replicatedToNodes: {
      shape: NodeList
    },
    resourcePrimaries: {
      shape: PrimaryLocationMap
    },
    consumedCapacity: {
      shape: ConsumedCapacity
    }
  }
};

const ResourceNotFoundException: TreeModelStructure = {
  type: "structure",
  exception: true,
  name: "ResourceNotFoundException",
  exceptionType: "ResourceNotFoundException",
  exceptionCode: "NOT_FOUND",
  documentation: "Exception thrown when a resource is not found",
  required: [],
  members: {}
};

export const ValidationException: TreeModelStructure = {
  type: "structure",
  exception: true,
  name: "ValidationException",
  exceptionType: "ValidationException",
  exceptionCode: "VALIDATION_FAILED",
  documentation: "Exception thrown when validation fails",
  required: [],
  members: {}
};

export const metadata: ServiceMetadata = {
  apiVersion: "2017-04-30",
  endpointPrefix: "endpoint",
  protocol: "rest-json",
  serviceFullName: "AWS Fake Service",
  signatureVersion: "v4",
  uid: "fake-2017-04-30"
};

export const model: TreeModel = {
  documentation: "A fake service",
  name: "FakeService",
  metadata,
  operations: {
    DeleteResource: {
      metadata,
      name: "DeleteResource",
      documentation: "DeleteResource operation",
      http: {
        method: "DELETE",
        requestUri: "/resources/{resourceId}"
      },
      input: { shape: DeleteResourceInput },
      output: { shape: DeleteResourceOutput },
      errors: []
    },
    GetResource: {
      metadata,
      name: "GetResource",
      documentation: "GetResource operation",
      http: {
        method: "GET",
        requestUri: "/resources/{resourceId}"
      },
      input: { shape: GetResourceInput },
      output: { shape: GetResourceOutput },
      errors: [{ shape: ResourceNotFoundException }]
    },
    PutResource: {
      metadata,
      name: "PutResource",
      documentation: "PutResource operation",
      http: {
        method: "PUT",
        requestUri: "/resources/{resourceId}"
      },
      input: { shape: PutResourceInput },
      output: { shape: PutResourceOutput },
      errors: [{ shape: ValidationException }]
    },
    DescribeItem: {
      metadata,
      name: "DescribeItem",
      documentation: "DescribeItem operation",
      http: {
        method: "GET",
        requestUri: "/item"
      },
      input: { shape: DescribeItemInput },
      output: { shape: DescribeItemOutput },
      errors: [{ shape: ResourceNotFoundException }]
    }
  },
  shapes: {
    ConsumedCapacity,
    DeleteResourceInput,
    DeleteResourceOutput,
    DescribeItemInput,
    DescribeItemOutput,
    GetResourceInput,
    GetResourceOutput,
    NodeId,
    NodeList,
    PrimaryLocationMap,
    PutResourceInput,
    PutResourceOutput,
    ResourceId,
    ResourceNotFoundException,
    StreamingBlob,
    ValidationException
  }
};

export const minimalValidServiceMetadata: ServiceMetadata = {
  apiVersion: "string",
  endpointPrefix: "string",
  protocol: "json",
  serviceFullName: "string",
  signatureVersion: "v4",
  uid: "string"
};
