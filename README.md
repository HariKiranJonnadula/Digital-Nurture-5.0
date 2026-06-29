# Digital Nurture 5.0 - Java FSE

This repository contains the mandatory hands-on exercises and assignments completed for the Cognizant Digital Nurture 5.0 program (Java Full Stack Engineer path). 

All assignments are neatly organized inside the [solution/](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/) directory.

---

## Directory Structure and Modules

### 1. [Engineering concepts](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/Engineering%20concepts/)
Exercises implementing fundamental software design patterns and algorithms:
*   **Design Principles & Patterns**:
    *   `SingletonPatternExample`: Thread-safe double-checked locking logger singleton class.
    *   `FactoryMethodPatternExample`: Factory method design pattern creating PDF, Word, and Excel documents.
*   **Algorithms and Data Structures**:
    *   `EcommerceSearch`: Linear and binary search implementations with sorting and time complexity analysis.
    *   `FinancialForecasting`: Iterative, recursive, and memoized recursive growth calculations.

### 2. [React](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/React/)
Contains 10 completed React hands-on applications:
*   `1. myfirstreact`: Initial setup, rendering elements.
*   `2. StudentApp`: Components (About, Contact, Home) layout.
*   `3. scorecalculatorapp`: Calculating scores from inputs.
*   `4. blogapp`: Post list renderer.
*   `5. cohortdetailsapp`: Cohort lists with modular stylesheets.
*   `9. cricketapp`: Player listing and filtering.
*   `10. officespacerentalapp`: Office space card rendering.
*   `11. eventexamplesapp`: React event handling.
*   `12. ticketbookingapp`: Dynamic ticket selection and calculations.
*   `13. bloggerapp`: Nested routing and component details display.

### 3. [PL SQL programming](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/PL%20SQL%20programming/)
PL/SQL scripts showcasing database procedures and control flows:
*   `schema_setup.sql`: Tables structure (`Customers`, `Accounts`, `Transactions`, `Loans`, `Employees`) with seed scripts.
*   `control_structures.sql`: Discount applications for senior citizens, VIP flags based on balances, and loan reminders.
*   `stored_procedures.sql`: `ProcessMonthlyInterest` for savings, department `UpdateEmployeeBonus`, and transaction `TransferFunds`.

### 4. [TDD JUnit Mockito](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/TDD%20JUnit%20Mockito/)
Unit testing and Mocking using JUnit 5 and Mockito:
*   Includes `AssertionsTest` demonstrating basic JUnit assertions and `MyServiceTest` showcasing Mockito mock stubbing and verification using the AAA (Arrange-Act-Assert) pattern.

### 5. [SLF4J logging](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/SLF4J%20logging/)
Logging configuration and implementation:
*   Configured Console and File appenders writing to `app.log` via Logback.
*   Demonstrates parameterized logging and custom layout patterns.

### 6. [Spring Core and Maven](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/Spring%20Core%20and%20Maven/)
Spring framework Core dependencies and IoC Container injection:
*   `applicationContext.xml`: XML configuration wiring bean dependencies (`BookRepository` into `BookService`) via Setter Injection.

### 7. [Spring Data JPA](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/Spring%20Data%20JPA/)
Database ORM integration in Spring Boot:
*   `orm-learn`: Multi-method H2 database CRUD operations mapping Country JPA Entity.

### 8. [Spring REST](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/Spring%20REST/)
Web services and Security:
*   `spring-rest-learn`: REST controllers for routing and JWT Token filter security authentication.

### 9. [Microservices](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/Microservices/)
Spring Cloud multi-module microservice configuration:
*   `eureka-server`: Netflix Eureka Discovery Server.
*   `api-gateway`: Spring Cloud Gateway with path routing configurations.
*   `account-service` & `loan-service`: Eureka Client microservices.

### 10. [Angular](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/Angular/)
Frontend components and bindings:
*   `student-course-portal`: Standalone components, template/reactive form inputs, Highlight directive, and Routing auth guard.

### 11. [GIT](file:///d:/Study/Cognizant/Digital-Nurture-JavaFSE-main/Java%20FSE/Deepskilling/solution/GIT/)
*   `git_lab_steps.txt`: Summary of Git workflows and command execution logs.

---

## Technical Simplification (Flat Packaging)

To simplify standalone workspace navigation, the package structures of all Java projects have been **flattened** into a single root `app` package folder (`src/main/java/app`).
