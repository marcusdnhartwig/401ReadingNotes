# CLASS 18 AWS: API, Dynamo and Lambda

*All notes taken from reading material*

## Amazon API Gateway

1. What is Amazon API Gateway?

- Is a managed service that allows developers to define the HTTP endpoints of a REST API or a WebSocket API and connect those endpoints with the corresponding backend business logic. It also handles authentication, access control, monitoring, and tracing of API requests.

2. Why is Amazon API Gateway an important part of the Serverless ecosystem?

- API Gateway is the piece that ties together Serverless functions and API definitions. Being able to trigger the execution of a Serverless function directly in response to an HTTP request is the key reason why API Gateway is so valuable in Serverless setups: 

    *  it enables a truly serverless architecture for web applications

3. How does API Gateway integrate with other AWS services?

- **AWS Lambda:** run Lambda functions to generate HTTP API responses.
- **AWS SNS:** publish SNS notifications when an HTTP API endpoint is accessed.
- **Amazon Cognito:** provide authentication and authorization for your HTTP APIs.

    - Invoking an AWS Lambda function.
    - Invoking another HTTP endpoint, with or without VPC Link.
    - Making an HTTP call against the API of any AWS service that provides an HTTP API.
    - Returning a mock response generated within API Gateway without calling out to other services.


## Amazon API Gateway 
### Create, maintain, and secure APIs at any scale

![img](/assets/401-imgs/APIGATEWAY.png)

1. What are the some benefits of using Amazon API Gateway?

    - Efficient API development
        - Run multiple versions of the same API simultaneously with API Gateway, allowing you to quickly iterate, test, and release new versions. You pay for calls made to your APIs and data transfer out and there are no minimum fees or upfront commitments.

    - RESTful API options
        - Create RESTful APIs using HTTP APIs or REST APIs. HTTP APIs are the best way to build APIs for a majority of use cases—they're up to 71% cheaper than REST APIs. If your use case requires API proxy functionality and management features in a single solution, you can use REST APIs.

    - Easy monitoring
        - Monitor performance metrics and information on API calls, data latency, and error rates from the API Gateway dashboard, which allows you to visually monitor calls to your services using Amazon CloudWatch.

    - Performance at any scale
        - Provide end users with the lowest possible latency for API requests and responses by taking advantage of our global network of edge locations using Amazon CloudFront. Throttle traffic and authorize API calls to ensure that backend operations withstand traffic spikes and backend systems are not unnecessarily called.

    - Flexible security controls
        - Authorize access to your APIs with AWS Identity and Access Management (IAM) and Amazon Cognito. If you use OAuth tokens, API Gateway offers native OIDC and OAuth2 support. To support custom authorization requirements, you can execute a Lambda authorizer from AWS Lambda.

2. What two API types might you choose from?

a. RESTful API

b. WEBSOCKET API

## DynamoDBGuide: What is DynamoDB?

1. What is DynamoDB?

DynamoDB is a hosted NoSQL database offered by Amazon Web Services (AWS). It offers:

    - reliable performance even as it scales;
    - a managed experience, so you won't be SSH-ing into servers to upgrade the crypto libraries;
    - a small, simple API allowing for simple key-value access as well as more advanced query patterns.

2. Under what circumstances would you recommend DynamoDB over MongoDB?

**Operations model**

DynamoDB has a more radical model. Rather than thinking about instances, you only think about usage. You are not responsible for installing software, managing servers, or increasing your cluster size. You only tell AWS how much read and write capacity you want (or skip it altogether by using On-Demand Pricing). As your data usage needs grow, you simply increase the capacity you need.


## Amazon DynamoDB
### Fast, flexible NoSQL database service for single-digit millisecond performance at any scale

1. Explain to a non-technical friend how DynamoDB works.

- Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data export tools.

![img](/assets/401-imgs/DynaHowitworks.png)

## DynamooseJS

1. What is Dynamoose?

- Dynamoose is a modeling tool for Amazon's DynamoDB. Dynamoose is *heavily inspired by Mongoose,* which means if you are coming from Mongoose the syntax will be very familar.