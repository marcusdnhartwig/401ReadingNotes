# CLASS 16 AWS: Cloud Servers

*All notes taken from reading material*

## Amazon S3
### Object storage built to retrieve any amount of data from anywhere

1. What is Amazon S3?

- It is an object storage service offering industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and mobile apps. 

2. Name some use cases for Amazon S3.

    a. Build a data lake
        - Run big data analytics, artificial intelligence (AI), machine learning (ML), and high performance computing (HPC) applications to unlock data insights.
    
    b. Back up and restore critical data
        - Meet Recovery Time Objectives (RTO), Recovery Point Objectives (RPO), and compliance requirements with S3’s robust replication features.
    
    c. Archive data at the lowest cost
        - Move data archives to the Amazon S3 Glacier storage classes to lower costs, eliminate operational complexities, and gain new insights.

    e. Run cloud-native applications
        - Build fast, powerful mobile and web-based cloud-native apps that scale automatically in a highly available configuration.

3. Name some benefits of using Amazon S3.

**Here ya go**
![img](/assets/401-imgs/Screen%20Shot%202022-07-05%20at%209.55.03%20PM.png)

## AWS Lambda The Ultimate Guide

1. What is AWS Lambda?

- AWS Lambda is a serverless computing service provided by Amazon Web Services (AWS)

2. Name some use cases for AWS Lambdas.

- individual tasks run for a short time;
- each task is generally self-contained;
- there is a large difference between the lowest and highest levels in the workload of the application.

3. Describe “serverless” to a non-technical friend.

*AWS:*
A serverless architecture is a way to build and run applications and services without having to manage infrastructure. Your application still runs on servers, but all the server management is done by AWS.


## Content Delivery Network (CDN)

1. What is a CDN?

Is a geographically distributed group of servers that work together to provide fast delivery of Internet content. A CDN allows for the fast transfer of data needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.

2. How does a CDN work with relation to the website visitor?

CDNs work through servers nearest to the website visitor respond to the request. The content delivery network copies the pages of a website to a network of servers that are spread out at geographically different locations, caching the contents of the page. When a user requests a webpage that is part of a content delivery network, the CDN will redirect the request from the originating site’s server to a server in the CDN that is closest to the user and deliver the cached content. 


3. What are the benefits of employing a CDN?

improve Internet website load speeds,

content delivery speeds, and to 
 
reduce the likelihood of falling victim to and improve defenses against Distributed Denial of Service attacks (DDoS).