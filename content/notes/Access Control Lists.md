---
created: 2024-05-13 18:19
aliases:
  - ACL
  - ACLs
  - Permission Lists
  - Access Control Entries
  - Resource Permissions
  - Access Control Lists (ACLs)
tags:
  - LearningIT
  - bud🌿
links:
---

link: [[Web Security]]

# Access Control Lists (ACLs)

## Overview

Access Control Lists (ACLs) define permissions for users, groups, or systems to control access to resources. By specifying who can perform actions like reading, writing, or executing, ACLs add a layer of security, allowing only authorized access to sensitive resources.

## Key Concepts

> [!important]
> 
> - **Access Control Entry (ACE)**: A specific permission rule within an ACL.
> - **Permissions**: Actions allowed or denied, such as read, write, execute.
> - **DACL (Discretionary ACL)**: Lists access rights granted/denied to users.
> - **SACL (System ACL)**: Tracks and audits specific user actions.

## Types of ACLs

> [!summary]-
> 
> - **Standard ACLs**: Basic filtering based on source IP.
> - **Extended ACLs**: Advanced filtering by IP, protocols, and ports.
> - **File System ACLs**: Manage access to files and directories.
> - **Network ACLs**: Control access on network devices.
> - **Database ACLs**: Set permissions for database objects.
> - **Application ACLs**: Manage user access within applications.

## How ACLs Work 

1. **Define Permissions**: Specify user or group access for each resource.
2. **Request Evaluation**: On access attempt, ACL checks permissions.
3. **Grant or Deny**: Based on ACEs, access is approved or rejected.
4. **Audit (SACL)**: Logs actions if auditing is configured.

## Best Use Cases

- **File Security**: Restrict access to sensitive files and directories.
- **Network Security**: Filter traffic and restrict device access.
- **Database Security**: Enforce permissions on database resources.
- **Application Security**: Control user functions within apps.
- **Cloud Environments**: Use ACL-like rules (e.g., AWS Security Groups, Azure NSGs) for resource access control.

## Related Topics 

> [!summary] 
> 
> - **[[Authentication]]**: Verifies user identity before ACL checks permissions.
> - **[[Authorization]]**: Defines allowed actions post-authentication.
> - **[[Role-Based Access Control]]**: Simplifies access by assigning roles, used alongside ACLs.

## Conclusion

ACLs are essential for granular access control, allowing organizations to protect resources by defining user-specific permissions. They are a foundational security measure for ensuring compliance and protecting data.
