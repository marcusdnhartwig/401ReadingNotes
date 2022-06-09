# Introduction To SQL

*All notes taken from Reading Material*

## Learn SQL - e-Book

**THE SQL BOOK IS READY AND WAITING FOR REFRENCE**

/////////////////////////////////////////////////////////////////////////

## SQL Bolt Tutorials [This Way for the numnums](https://sqlbolt.com/lesson/introduction)
### Introduction to SQL

¿What is SQL?
- SQL, or Structured Query Language, is a language designed to allow both technical and non-technical users query, manipulate, and transform data from a relational database.

*NOTE* - *Did you know?* - There are many popular SQL databases including SQLite, MySQL, Postgres, Oracle and Microsoft SQL Server. All of them support the common SQL language standard, which is what this site will be teaching, but each implementation can differ in the additional features and storage types it supports.

**Relational databases**
- It is important to have a model for what a relational database actually is. A relational database represents a collection of related (two-dimensional) tables. Each of the tables are similar to an Excel spreadsheet, with a fixed number of named columns (the attributes or properties of the table) and any number of rows of data.

- By learning SQL, the goal is to learn how to answer specific questions about data.

### Lesson 1: SELECT Queries 101

- To retrieve data from a SQL database, we need to write **SELECT** statements, which are often colloquially refered to as queries. 

![Excersise](/assets/preworkAssets/sqlE1.png)

### Lesson 2: Queries with constraints (Pt. 1)

- If you had a table with a hundred million rows of data, reading through all the rows would be inefficient and perhaps **even impossible.**

- In order to filter certain results from being returned, we need to use a **WHERE** clause in the query.
    * The clause is applied to each row of data by checking specific column values to determine whether it should be included in the results or not.

- More complex clauses can be constructed by joining numerous **AND or OR** logical keywords (ie. num_wheels >= 4 AND doors <= 2).

![cheatsheet](/assets/preworkAssets/cheatsheet.png)

*Did you know?*
*As you might have noticed by now, SQL doesn't require you to write the keywords all capitalized, but as a convention, it helps people distinguish SQL keywords from column and tables names, and makes the query easier to read.*

![sql excersice 2](/assets/preworkAssets/sqlE2.png)

### Lesson 3: Queries with constraints (Pt. 2)

- When writing WHERE clauses with columns containing text data, SQL supports a number of useful operators to do things like case-insensitive string comparison and wildcard pattern matching. We show a few common text-data specific operators below:
![whereExample](/assets/preworkAssets/WhereExa.png)

*Did you know?*
*All strings must be quoted so that the query parser can distinguish words in the string from SQL keywords.*

![Exercise 3](/assets/preworkAssets/sqlE3.png)

### Lesson 4: SQL Lesson 4: Filtering and sorting Query results

- Even though the data in a database may be unique, the results of any particular query may not be.

- Since the **DISTINCT** keyword will blindly remove duplicate rows, we will learn in a future lesson how to discard duplicates based on specific columns using grouping and the **GROUP BY** clause.

- Most data in real databases are added in no particular column order. As a result, it can be difficult to read through and understand the results of a query as the size of a table increases to thousands or even millions rows.

- To help with this, SQL provides a way to sort your results by a given column in ascending or descending order using the **ORDER BY** clause.

- When an ORDER BY clause is specified, each row is sorted alpha-numerically based on the specified column's value. In some databases, you can also specify a collation to better sort data containing international text.

- Another clause which is commonly used with the **ORDER** BY clause are the **LIMIT** and **OFFSET** clauses, which are a useful optimization to indicate to the database the subset of the results you care about.

- The LIMIT will reduce the number of rows to return, and the optional OFFSET will specify where to begin counting the number rows from.

*Did you know?*
*If you are curious about when the LIMIT and OFFSET are applied relative to the other parts of a query, they are generally done last after the other clauses have been applied.*

![Sqlpic from lab 4](/assets/preworkAssets/sqlE4.png)
![formyref](/assets/preworkAssets/SELECTtitle.png)

### Review: Simple SELECT Queries
*For my refrence*
![select](/assets/preworkAssets/ReviewSELECT.png)

- *Did you know?*

*Positive latitudes correspond to the northern hemisphere, and positive longitudes correspond to the eastern hemisphere.*
**BOOM**
![review complete](/assets/preworkAssets/sqlR5.png)

### Lesson 6: Multi-table queries with JOINs
* Entity data in the real world is often broken down into pieces and stored across multiple orthogonal tables using a process known as *normalization*.

**Database normalization**

Database normalization is useful because it minimizes duplicate data in any single table, and allows for data in the database to grow independently of each other.

- As a trade-off, queries get slightly more complex since they have to be able to find data from different parts of the database, and performance issues can arise when working with many large tables.

**Multi-table queries with JOINs**
- Tables that share information about a single entity need to have a *primary key* that identifies that entity *uniquely* across the database.

- One common primary key type is an auto-incrementing integer (because they are space efficient), but it can also be a string, hashed value, so long as it is unique.

- Using the **JOIN** clause in a query, we can combine row data across two separate tables using this unique key. The first of the joins that we will introduce is the **INNER JOIN.**

- The **INNER JOIN** is a process that matches rows from the first table and the second table which have the same key (as defined by the **ON** constraint) to create a result row with the combined columns from both tables. After the tables are joined, the other clauses we learned previously are then applied.

![innerjoin](/assets/preworkAssets/InnerJoin.png)

*Did you know?*
*You might see queries where the **INNER JOIN** is written simply as a **JOIN.** These two are equivalent, but we will continue to refer to these joins as inner-joins because they make the query easier to read once you start using other types of joins.*

![innerjoinExcercise](/assets/preworkAssets/sqlE6.png)

### Lesson 7: OUTER JOINs ----
### Lesson 8: A short note on NULLs ----
### Lesson 9: Queries with expressions ----
### Lesson 10: Queries with aggregates (Pt. 1) ----
### Lesson 11: Queries with aggregates (Pt. 2) ----
### Lesson 12: Order of execution of a Query ----

### Lesson 13: Inserting rows
¿What is a Schema?
-We previously described a table in a database as a two-dimensional set of rows and columns, with the columns being the properties and the rows being instances of the entity in the table.
    - In SQL, the *database schema* is what describes the structure of each table, and the datatypes that each column of the table can contain.

Example: Correlated subquery
in our **Movies** table, the values in the **Year** column must be an Integer, and the values in the **Title** column must be a String.

    - This fixed structure is what allows a database to be efficient, and consistent despite storing millions or even billions of rows.

**Inserting new data**

    - When inserting data into a database, we need to use an **INSERT** statement, which declares which table to write into, the columns of data that we are filling, and one or more rows of data to insert.

    -  In general, each row of data you insert should contain values for every corresponding column in the table.

- You can insert multiple rows at a time by just listing them sequentially.

![insertinto](/assets/preworkAssets/InsertInto.png)
![exersise13](/assets/preworkAssets/sqlE13.png)

### Lesson 14: Updating rows

- In addition to adding new data, a common task is to update existing data, which can be done using an **UPDATE** statement. Similar to the **INSERT** statement, you have to specify exactly which table, columns, and rows to update. In addition, the data you are updating has to match the data type of the columns in the table schema.

![INSERT](/assets/preworkAssets/Set.png)

**Taking care**

*Most people working with SQL will make mistakes updating data at one point or another. Whether it's updating the wrong set of rows in a production database, or accidentally leaving out the **WHERE** clause (which causes the update to apply to all rows), you need to be extra careful when constructing **UPDATE** statements.*

    -One helpful tip is to always *write the constraint first and test it* in a **SELECT** query to make sure you are updating the right rows, and only then writing the column/value pairs to update.

* This is a ref note for me from the exercise
![exercise](/assets/preworkAssets/sqlexer14.png)

### Lesson 15: Deleting rows

When you need to delete data from a table in the database, you can use a **DELETE** statement, which describes the table to act on, and the rows of the table to delete through the **WHERE** clause.

**NOTE!!!** 
   
    ->->-> If you decide to leave out the **WHERE** constraint, **then all rows are removed**, which is a quick and easy way to clear out a table completely (if intentional).

**Taking extra care**
**Like the UPDATE statement, it's recommended that you run the constraint in a SELECT query first to ensure that you are removing the right rows. Without a proper backup or test database, it is downright easy to irrevocably remove data, so always read your DELETE statements twice and execute once.**

![removed andrew](/assets/preworkAssets/DeleteAndrew.png)

### Lesson 16: Creating tables

* When you have new entities and relationships to store in your database, you can create a new database table using the **CREATE TABLE** statement.

- The structure of the new table is defined by its *table schema,* which defines a series of columns. Each column has a name, the type of data allowed in that column, an *optional* table constraint on values being inserted, and an optional default value.

- If there already exists a table with the same name, the SQL implementation will usually throw an error, so to suppress the error and skip creating a table if one exists, you can use the **IF NOT EXISTS** clause.

**Table data types**

Different databases support different data types, but the common types support numeric, string, and other miscellaneous things like dates, booleans, or even binary data. Here are some examples that you might use in real code:
![table data types](/assets/preworkAssets/tabledatatypes.png)

**Table constraints**
Each column can have additional table constraints on it which limit what values can be inserted into that column. *This is not a comprehensive list,* but will show a few common constraints that you might find useful:
![Table Constrainst](/assets/preworkAssets/tableconstraints.png)

From lesson:
![new table](/assets/preworkAssets/newtable.png)

### Lesson 17: Altering tables

As your data changes over time, SQL provides a way for you to update your corresponding tables and database schemas by using the **ALTER TABLE** statement to add, remove, or modify columns and table constraints.

**Adding columns**
> You need to specify the data type of the column along with any potential table constraints and default values to be applied to both existing and new rows. In some databases like MySQL, you can even specify where to insert the new column using the FIRST or AFTER clauses, though this is not a standard feature.

![addnewcolumn](/assets/preworkAssets/Altertable.png)

**Removing columns**
> Dropping columns is as easy as specifying the column to drop, however, some databases (including SQLite) don't support this feature. Instead you may have to create a new table and migrate the data over.
![removecolumn](/assets/preworkAssets/removecolumn.png)

**Renaming the table**
If you need to rename the table itself, you can also do that using the RENAME TO clause of the statement.

    ALTER TABLE table
    RENAME TO new_table

![exercise17](/assets/preworkAssets/sqlE17.png)

### Lesson 18: Dropping tables

In some rare cases, you may want to remove an entire table including all of its data and metadata, and to do so, you can use the **DROP TABLE** statement, which differs from the **DELETE** statement in that it also removes the table schema from the database entirely.
![drop table](/assets/preworkAssets/droptable.png)

- Like the CREATE TABLE statement, the database may throw an error if the specified table does not exist, and to suppress that error, you can use the IF EXISTS clause.

* In addition, if you have another table that is dependent on columns in table you are removing (for example, with a **FOREIGN KEY** dependency) then you will have to either update all dependent tables first to remove the dependent rows or to remove those tables entirely.

![that was fun](/assets/preworkAssets/finSqlT.png)

/////////////////////////////////////////////////////////////////////////

## Personal Reflection 

I was very deliberate in my reading of the steps of the tutorial and I found it increadibly FUN!

I thought that it was crazy that I was going through the CRUD program via SQL in such a breezy way, when in 301 it felt like pulling teeth!

I look forward to actually using the SQL framework and not just playing on a tutorial.

I am a very expressive person when solving puzzles and I found myself claping my hands and throwing my arms in the air due to excitment a bunch! Winning isn't something I'm used to in the world of CODE. lol!
