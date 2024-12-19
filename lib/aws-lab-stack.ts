import {
  Stack,
  StackProps,
} from 'aws-cdk-lib';

import { Construct } from 'constructs';
import { CustomResourceStack } from './stacks/custom-resource-stack';

export class AWSLabStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new CustomResourceStack(this, 'CustomResourceStack');

  }

}
