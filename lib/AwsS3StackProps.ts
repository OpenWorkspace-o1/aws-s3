import { StackProps } from "aws-cdk-lib";

export interface AwsS3StackProps extends StackProps {
    /**
     * Prefix used for naming AWS resources
     * Example: "myapp-prod"
     */
    readonly resourcePrefix: string;

    /**
     * AWS region where resources will be deployed
     * Example: "us-east-1"
     */
    readonly deployRegion: string | undefined;

    /**
     * Full environment name where the stack is being deployed
     * Example: "production"
     */
    readonly deployEnvironment: string;

    /**
     * Shortened version of the environment name
     * Example: "prd", "dev",...
     */
    readonly shortDeployEnvironment: string;

    /**
     * Name of the application
     * Example: "myapp"
     */
    readonly appName: string;

    /**
     * Owner or team responsible for the resources
     * Example: "platform-team"
     */
    readonly owner: string;

    /**
     * Name of the S3 bucket
     * Example: "myapp-prod-bucket"
     */
    readonly s3BucketName: string;
}
