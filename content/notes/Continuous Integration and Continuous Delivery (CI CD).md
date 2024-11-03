Date and Time: <u> 2023-10-18 01:31 </u>
Status: #LearningIT
Tags: [[DevOps lifecycle]]

# Continuous Integration and Continuous Delivery (CI CD)

![[Pasted image 20231018013511.png]]
![[Pasted image 20231018013724.png]]

## CI/CD explained

CI/CD is an umbrella term covering several DevOps phases. CI (continuous integration) is the practice of integrating code changes into a repo several times a day. CD has two meanings: Continuous **delivery** automates code integrations, while continuous **deployment** auto-releases final builds to end-users. CI/CD’s frequent testing reduces code errors and defects, making it crucial to every [[DevOps lifecycle]]

## What is continuous integration? (CI)

Continuous integration (CI) is an automated software development process that increases the speed of development while ensuring clean, quality code with every deployment. Continuous integration requires developers to frequently checkin/commit their units of code to a central shared repository many times a day. 

CI is a [DevOps best practice](https://unity.com/solutions/devops-principle) and stage in the [[DevOps lifecycle]] when developers checkin code to their shared code repository. An automated build tool verifies the checkin or branch to ensure there are no errors and that it’s ready to go into production. The main benefit here is that problems are usually caught early before they can snowball into bigger issues.

Practicing CI means integrating small subsets of changes in a shorter period of time, rather than substantial updates that take longer and less often. Automating workflows for testing, merging, and checking in changes to a shared repo means teams can deliver cleaner code at a faster rate. Cleaner code means faster validation, higher-quality releases, and a more efficient development pipeline that’s easier to scale.

## How does continuous integration work?

Continuous integration is a simple and seamless process that begins in the development phase and ends in the testing environment. Continuous integration allows all developers to work collaboratively and keep track of their code. Every developer “commits” their code in small increments to a shared code repository, also known as the mainline repository. The code repository is maintained in a [version control system](https://unity.com/solutions/what-is-version-control) like [Unity VCS](https://unity.com/solutions/version-control), [Perforce](https://unity.com/solutions/perforce), or [Git](https://unity.com/solutions/git). Every commit made to the repository’s main branch (or child branches if you choose) can trigger an automated build process linked to a build management system that takes the code and creates a build. Once the code is merged into the build system, the developers gain full access to their code builds. From here, they can see if their code is compiled correctly or if there is an error that they might need to fix. Build systems can be configured to support various testing frameworks. 

Once the code is approved and the build cycle is successful, an automated testing environment is triggered to validate the quality of the build and subsequent release. Because the test and build process is extremely quick, the results of the code commits can be communicated quickly, empowering developers to fix any remaining errors in a timely manner. This whole process ensures that the codebase stays healthy and everyone can continue to work efficiently.

## Rules and principles of CI

- **Maintain one central code repository**

Temporarily storing code from different developers in various teams into separate repositories or separate systems should be kept to a minimum.

- **Commit/check in code to the mainline repository frequently**

The longer a developer holds onto code without building or testing it, the more likely it is to be inconsistent with what’s stored in the central repository.

- **Maintain separate build and test servers**

Teams should maintain dedicated machines for build purposes only. This speeds up the build process and minimizes the impact on other developers' workflows.

- **Builds and tests must be automated**

Every piece of code committed to the central source code repository should be built and tested automatically with continuous integration tools.

- **Use production-like testing environments**

Testing environments should simulate the eventual production environment. This ensures the usefulness of the testing environment and keeps expectations consistent throughout deployment.

- **Quality assurance teams should have access to builds**

When QA has access to builds, any failure to meet production requirements can be detected early,  reducing the risk of having to rework code builds later.

## Continuous Delivery vs Continuous Deployment

Continuous deployment and continuous delivery are practices used to take new code and push it into production as quickly and efficiently as possible. Continuous delivery follows CI – you can think of it as a checkpoint phase in the development pipeline before the final product is released to customers. Once code changes have been validated, they’re automatically delivered to the central repository.

Continuous deployment follows CI in the DevOps lifecycle, but the two processes are linked. CI integrates code into the build with automation; CD completes that process. DevOps automations evaluate the quality of the updates. Once they’ve been found to be clear of errors, they’re automatically deployed to production.

### **What is continuous delivery?**

Continuous delivery refers to the building, testing, and delivery of code changes to software. In this process, code passes through various testing environments, such as automated unit testing, integration testing, and system testing, before being pushed to production. Continuous delivery happens in production-like staging environments where QAs review the code, fix bugs, and run automated tests to ensure that builds are always deployable and release-ready.

With continuous delivery, the goal is to keep changesets small enough that no updates to the main build will compromise the final product’s “production-ready” status. The final product may contain minor errors, but nothing substantial enough to compromise the user experience.

Practicing continuous delivery means developers can spend less time testing in-house, as the practice ensures that only stable code makes it to the delivery phase in the first place. It makes bug detection a simpler process, accelerating time to resolution.

### **What is continuous deployment?**

 Continuous deployment aims to continuously deploy code changes into production from the central repository once the build is stable. The operations team deploys the compiled code and installs the software in different environments (dev/test, staging, and production). Each change passes through an automated pipeline that pushes a working version of the application into production. Deployment can take different forms. **A dark release** is a deployment that’s hidden from users, while **feature toggles** or **switches** can be used to deploy specific subsets of a changeset to a group of users for testing and feedback.

Continuous deployment has numerous benefits for developers and customers. Devs using continuous deployment solutions no longer need to worry about manual build deployment and can focus on more skill-based tasks. Automation shortens feedback loops, which means products can be updated more quickly based on customer input. With continuous deployment, code is run and maintained in a simulated environment that ensures quality and enables real-time monitoring of the product.  The main goal of continuous deployment is to release newer versions of the code consistently and automatically deploy those changes to end users.
# Reference:
[[https://unity.com/solutions/what-is-ci-cd]]


 