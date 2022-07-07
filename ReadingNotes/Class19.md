# CLASS 19 AWS: Events

*All notes taken from reading material*


## AWS — Difference between SQS and SNS

![img](/assets/401-imgs/sqssnsaws.png)

1. What is the difference betweeen SQS and SNS?

**Entity Type**

SQS : Queue (similar to JMS, MSMQ).

SNS : Topic-Subscriber (Pub/Sub system).

**Message consumption**

SQS : Pull Mechanism — Consumers poll messages from SQS.

SNS : Push Mechanism — SNS pushes messages to consumers.

**Persistence**

SQS : Messages are persisted for some duration is no consumer available. The retention period value is from 1 minute to 14 days. The default is 4 days.

SNS : No persistence. Whichever consumer is present at the time of message arrival, get the message and the message is deleted. If no consumers available then the message is lost.

*In SQS the message delivery is guaranteed but in SNS it is not.*

**Consumer Type**

SQS : All the consumers are supposed to be identical and hence process the messages in exact same way.

SNS : All the consumers are (supposed to be) processing the messages in different ways.

2. What are some use cases for both SNS and SQS?

**SNS**

    - You would like to be able to publish and consume batches of messages.

    - You would like to allow same message to be processed in multiple ways.

    - Multiple subscribers are needed.

**SQS**

    - You need a simple queue with no particular additional requirements.

    - Decoupling two applications and allowing parallel asynchronous processing.

    - Only one subscriber is needed.

## SNS vs SQS Comparison? Whats the difference? | Learn with a practical example

1. Describe how to use SQS and SNS in a “fanout” pattern.

**SNS**

Publishing messages to a topic can deliver to many subscribers(*fanout*) of different types-(SQS, Lambda, Email)

**SQS**

The system must poll the queue to discover any new events.

2. Explain how “push notifications” work, using SNS.

*AWS Docs* :

When an app and mobile device register, the push notification service returns a device token. Amazon SNS uses the device token to create a mobile endpoint, to which it can send direct push notification messages.

## Decouple and Scale Applications Using Amazon SQS and Amazon SNS - 2017 AWS Online Tech Talks

1. How might a large scale, distributed application make use of a Queue system like SQS?

- Because it doesn't communicate via email, but via applications and functions.

- The messages are also encripted. 

- The Queue system is a buffer for the messages between producers and consumers. 
