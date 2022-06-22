# CLASS 08 Access Control (ACL)

*All notes taken from reading material*

## 5 steps to simple role-based access control

1. What is Role Based Access Control (RBAC) and why do we care?

RBAC is the idea of assigning system access to users based on their role within an organization. The system needs of a given workforce are analyzed, with users grouped into roles based on common job responsibilities and system access needs. Access is then assigned to each person based strictly on their role assignment. With tight adherence to access requirements established for each role, access management becomes much easier.

With the proper implementation of RBAC, the assignment of access rights becomes systematic and repeatable. Further, it is much easier to audit user rights, and to correct any issues identified.

2. Describe a Role/Permission heirarchy that you might implement using RBAC.

**Access control lists (ACL)** — An ACL is a means of defining access rights by a given user or user group, to a specific object, such as a document.  As a simple example, an ACL could be used to allow users from one department to make changes to a document, while only allowing users from other departments to read the document.

**Attribute-based access control (ABAC)** — ABAC, sometimes known as policy-based access control, can use a variety of attributes, including user department, time of day, location of access, type of access required, etc. to determine whether a user’s access request should be granted.

3. What approach might you take to implement RBAC?

a. Inventory your systems
b. Analyze your workforce and create roles
c. Assign people to roles
d. Never make one-off changes
e. Audit

## Role-based access control - Wiki

1. If Authentication is “you are who you say you are,” what is Authorization?

- Do you have proper access to the defined material? Do you have security clearenses that allow for more access?

2. Name three primary rules defined for RBAC.

    a. **Role assignment:** A subject can exercise a permission only if the subject has selected or been assigned a role.

    b. **Role authorization:** A subject's active role must be authorized for the subject. With rule 1 above, this rule ensures that users can take on only roles for which they are authorized.

    c. **Permission authorization:** A subject can exercise a permission only if the permission is authorized for the subject's active role. With rules 1 and 2, this rule ensures that users can exercise only permissions for which they are authorized.

3. Describe RBAC to a non-technical friend.

The use of RBAC to manage user privileges (computer permissions) within a single system or application

## Role Based Access Control - Video

1. What Are access rights Associated with? The User? or The Role? Explain.

**The Role:** for the roles that folks have in the system, what rights do the possitions afford? 

2. Access Rights, or Authorization, is activated after a user successfully does what?

* When a user Authenticates themselves. 

3. Explain how RBAC might benefit a business.

![img](/assets/401-imgs/rbac.png)

