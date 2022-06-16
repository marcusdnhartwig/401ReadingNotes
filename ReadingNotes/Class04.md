# Class 04

*All notes taken from reading material*

## SQL vs NoSQL Database Differences Explained with few Example DB

1. What type of database is the best fit for the complex query intensive environment?

- For complex queries: *SQL databases are good fit for the complex query intensive environment* whereas NoSQL databases are not good fit for complex queries. On a high-level, NoSQL don’t have standard interfaces to perform complex queries, and the queries themselves in NoSQL are not as powerful as SQL query language.

2. What type of database is the best fit for hierarchical data storage?

- SQL databases are not best fit for hierarchical data storage. But, *NoSQL database fits better for the hierarchical data storage* as it follows the key-value pair way of storing data similar to JSON data. NoSQL database are highly preferred for large data set (i.e for big data). 

3. Describe the differences in scalability between a SQl and NoSQL database as though you were speaking to a non-technical friend.

- For scalability: In most typical situations, SQL databases are **vertically scalable.** You can manage increasing load by increasing the CPU, RAM, SSD, etc, on a single server.

- NoSQL databases are **horizontally scalable.** You can just add few more servers easily in your NoSQL database infrastructure to handle the large traffic.

## Keep it Simple: Easy To Understand Data Modeling Concepts

1. Among data tables, what is a one-to-many relationship and how do we “relate” them?

    - We connect lines between tables to show relationships.  In some cases an entry in one table can be related to more than one entry in another. 

![img](/assets/401-imgs/onetoomany.png)

2. Prior to designing your relational database, it might be useful to ___ a ___ of the database tables and their relationships.

**UNDERSTANTING**

3. Explain the difference between a primary and foreign key.

- A **foreign key** is a set of values in a table which match to the **primary key** of another table. 

- Primary key is the general term for any set of values that are unique and non-null across a table.  They provide a means to identity one record in a table.  A compound primary key is a primary key made up of two or more columns.

## SQL vs NoSQL or MySQL vs MongoDB - video

1. How do we treat keywords and parameters differently in SQL syntax?

- Tables, Fields(columns), Records(rows), Products

2. Define normalization within the context of schemas and data.

- ALL records have to follow a schema.

- We have to ensure the way that the data comes in will fit in the predefined way what we have created the table.

3. Explain the difference between one-to-one, one-to-many, and many-to-many relationships to a non-technical recruiter.

**One-to-One**

*A thing connects to a thing*

![img](/assets/401-imgs/onetoone.png)

**One-to-Many**

*A thing connects to many things*

![img](/assets/401-imgs/onetomany.png)

**Many-to-Many**

*Many things connect to many different things*

![img](/assets/401-imgs/manytomany.png)