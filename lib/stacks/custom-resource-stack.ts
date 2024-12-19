import {
    CustomResource,
    NestedStack,
    StackProps,
    CfnOutput,
    CustomResourceProvider,
    CustomResourceProviderRuntime,
    Fn,
  } from 'aws-cdk-lib';
  
  import { Construct } from 'constructs';
  
  export class CustomResourceStack extends NestedStack {
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);
  
      const serviceToken = CustomResourceProvider.getOrCreate(this, 'Custom::MyCustomResourceType', {
        codeDirectory: `${__dirname}/../resources/custom`,
        runtime: CustomResourceProviderRuntime.NODEJS_18_X,
      });
  
      const myCustomResource = new CustomResource(this, "MyCustomResource", {
        resourceType: "Custom::MyCustomResourceType",
        serviceToken
      });
  
      const myCommaSeparatedString = myCustomResource.getAttString("CommaSeparatedString");
      const listOfString = Fn.split(',', myCommaSeparatedString);
      new CfnOutput(this, 'id', {
        value: Fn.select(0, listOfString)
      });
      
    }
  }
  