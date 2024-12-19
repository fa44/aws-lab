#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AWSLabStack } from '../lib/aws-lab-stack';

const app = new cdk.App();
new AWSLabStack(app, 'AWSLabStack');
