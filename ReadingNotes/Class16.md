# CLASS 16 AWS: Cloud Servers
:
*All notes taken from reading material*

## Amazon EC2

### Secure and resizable compute capacity for virtually any workload

1. What is an EC2 Instance?

- Amazon *Elastic Compute Cloud* --> Scalable infrastructure on demand.
- It's an environment *like* NODE

2. Name 2 use cases for EC2.

    a. Run cloud-native and enterprise applications

    b. Develop for Apple platforms

    c. Scale for HPC applications

    d. Train and deploy ML applications

3. Provide 1 reason to use ECS instead of Heroku.

- offers the broadest and deepest compute platform, with over 500 instances and choice of the latest processor, storage, networking, operating system, and purchase model to help you best match the needs of your workload. 

- The only cloud with 400 Gbps Ethernet networking.

## EC2 for Humans | Amazon Web Services BASICS

1. Where can we find EC2 on the AWS Console?

- Under the Compute section

2. Explain the general difference between T2 Micro and XL.

- t2 = burst data output. 
- micro vs XL = is usage dependant 

3. Explain a “Compute Cycle” to a non-technical friend.

*prem soble*

- A compute cycle is the sequence of steps to:

    - fetch a (machine language) CPU instruction (from memory or cache)

    - decode the instruction opcode and and other sub-fields

    - access the operands (if any)

    - perform the operation (which may be a computation, or control flow meaning next instruction is not sequential in memory), write back result (such as to a register, memory and cache) where opropriate.

## Introduction to AWS Elastic Beanstalk

1. What is Elastic Beanstalk?

- Deploys, Manages, & Scales web apps and services for you!

2. Describe the relationship between EC2 and Elastic Beanstalk.

- The Beanstalk manages EC2 and works autonomisly to support your app to the best of your apps needs.

3. Name some benefits of using Elastic Beanstalk.

- it leverages AWS EC2 - S3 - Simple Notification Service - Elastic Load Balancing - Auto Scaling.