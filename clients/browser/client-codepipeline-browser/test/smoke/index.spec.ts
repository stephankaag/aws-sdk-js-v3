import { CodePipelineClient } from "../../CodePipelineClient";
import { ListPipelinesCommand } from "../../commands/ListPipelinesCommand";
import { GetPipelineCommand } from "../../commands/GetPipelineCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-codepipeline-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListPipelines should succeed when given correct input", done => {
    const client = new CodePipelineClient({
      region: defaultRegion,
      credentials
    });

    const listPipelines = new ListPipelinesCommand({} as any);

    client
      .send(listPipelines)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetPipeline should fail when given bad input", done => {
    const client = new CodePipelineClient({
      region: defaultRegion,
      credentials
    });

    const getPipeline = new GetPipelineCommand({
      name: "fake-pipeline"
    } as any);

    client
      .send(getPipeline)
      .then(result => {
        expect(result).toBeUndefined();
        done();
      })
      .catch(err => {
        expect(err).toBeDefined();
        done();
      });
  });
});
