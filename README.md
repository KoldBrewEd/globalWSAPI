# Global Serverless/Functionless WebSockets PubSub API 
## with AWS AppSync and Amazon EventBridge


![Screnshot](globalWSAPI.png)

## Requirements

* [Create an AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html) if you do not already have one and log in. The IAM user that you use must have sufficient permissions to make necessary AWS service calls and manage AWS resources.
* [Git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node and NPM](https://nodejs.org/en/download/) installed
* [AWS Cloud Development Kit](https://docs.aws.amazon.com/cdk/latest/guide/cli.html) (AWS CDK) installed
<br/>
<br/>

## Deploy APIs to the cloud

1. Clone the project to your local working directory:

   ```sh
   git clone https://github.com/awsed/globalWSAPI
   ```

2. Change the working directory to:

   ```sh
   cd globalWSAPI/cdk
   ```

3. Install the project dependencies:

   ```sh
   npm install
   ```

4. Deploy the stack to your default AWS account and region. After deployment, the output of this command shows the GraphQL API endpoint, API ID, and API key. Take note of all the details as they are needed to setup clients:

   ```sh
   cdk deploy
   ```

<br/>
<br/>


