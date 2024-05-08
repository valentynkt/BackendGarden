---
created: 2024-05-08 19:44
aliases: 
tags:
  - LearningIT
  - seed🌱
links:
---

Link: [[Web Communication Protocols]]

# SFTP (SSH File Transfer Protocol)


## Overview

SFTP, part of the SSH protocol suite, provides a secure method for transferring files over a reliable data stream. Unlike FTP, SFTP encrypts both commands and data, preventing passwords and sensitive information from being transmitted openly over the network.

## Key Features of SFTP

- **Secure Transfers**: Utilizes SSH to encrypt all transfers, protecting against interception and tampering.
- **Single Connection**: Uses a single, encrypted connection to transfer files, which simplifies firewall configuration and reduces potential points of failure.
- **Comprehensive Functionality**: Supports a range of operations on remote files including resuming interrupted transfers, directory listings, and remote file removal.

## Usage

SFTP is commonly used for secure file management and transfer in corporate environments where protection against external threats is crucial. It is also used in automated file transfers and batch jobs that require security assurances.
