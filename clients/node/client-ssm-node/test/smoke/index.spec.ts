import { SSMClient } from "../../SSMClient";
import { ListDocumentsCommand } from "../../commands/ListDocumentsCommand";
import { GetDocumentCommand } from "../../commands/GetDocumentCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for SSM.");

  await (async () => {
    const client = new SSMClient({
      region: defaultRegion
    });

    const command = new ListDocumentsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok SSM ListDocuments - no error expected from service");
    } catch (err) {
      console.log("not ok SSM ListDocuments - no error expected from service");
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
    }
  })();
  await (async () => {
    const client = new SSMClient({
      region: defaultRegion
    });

    const command = new GetDocumentCommand({
      Name: "'fake-name'"
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok SSM GetDocument - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok SSM GetDocument - error expected from service");
    }
  })();

  if (testFailed) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

// execute the test runner
smokeTestRunner();
