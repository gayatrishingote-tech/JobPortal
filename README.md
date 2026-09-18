# Job Portal

A web-based Job Portal application developed using Java, Spring Boot, MySQL, HTML, CSS and JavaScript.

## Features

### User Features
- User Registration and Login
- Search Jobs
- Filter Jobs by Title, Company and Location
- View Job Details
- Apply for Jobs
- View My Applications
- Track Application Status
- Save and Unsave Jobs

### Admin Features
- Admin Login
- Admin Dashboard
- Add Jobs
- Update Jobs
- Delete Jobs
- View Registered Users
- View Applications
- Update Application Status

## Technologies Used

- Java 25
- Spring Boot 4.0.8
- Spring Data JPA
- MySQL
- HTML
- CSS
- JavaScript
- REST API
- BCrypt Password Encryption
- Maven

## Database

The project uses MySQL database with the following main tables:

- Users
- Jobs
- Applications
- Saved Jobs
- Admins

## Application Status

An administrator can update application status:

- Applied
- Shortlisted
- Rejected

## Project Structure

```text
jobportal
├── src
├── ER-Diagram
├── target
├── pom.xml
├── jobportal.sql
└── README.md