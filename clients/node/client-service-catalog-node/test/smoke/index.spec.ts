import { ServiceCatalogClient } from "../../ServiceCatalogClient";
import { ListAcceptedPortfolioSharesCommand } from "../../commands/ListAcceptedPortfolioSharesCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..1");
  console.log("# Running tests for Service Catalog.");

  await (async () => {
    const client = new ServiceCatalogClient({
      region: defaultRegion
    });

    const command = new ListAcceptedPortfolioSharesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Service Catalog ListAcceptedPortfolioShares - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Service Catalog ListAcceptedPortfolioShares - no error expected from service"
      );
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
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
