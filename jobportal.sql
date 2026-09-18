USE jobportal;

CREATE TABLE jobs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    company VARCHAR(100),
    location VARCHAR(100)
);

INSERT INTO jobs (title, company, location)
VALUES
('Java Developer', 'TCS', 'Pune'),
('Software Developer', 'Infosys', 'Mumbai'),
('Web Developer', 'Wipro', 'Bangalore');

SHOW TABLES;

SELECT * FROM jobs;


USE jobportal;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);
SHOW TABLES;

USE jobportal;

CREATE TABLE applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    job_id INT,
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'Applied'
);

USE jobportal;

CREATE TABLE saved_jobs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    job_id INT,
    saved_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;

USE jobportal;

CREATE TABLE admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

INSERT INTO admins (name, email, password)
VALUES ('Admin', 'admin@jobportal.com', 'admin123');

SELECT * FROM admins;

USE jobportal;

SELECT id, name, email, password
FROM users;

USE jobportal;

DELETE FROM users
WHERE id = 3;

SELECT id, name, email
FROM users;


USE jobportal;

ALTER TABLE jobs
ADD COLUMN job_type VARCHAR(50),
ADD COLUMN salary VARCHAR(100),
ADD COLUMN experience VARCHAR(100),
ADD COLUMN skills VARCHAR(500),
ADD COLUMN description TEXT;

DESCRIBE jobs;

USE jobportal;

SELECT * FROM users;

USE jobportal;

SELECT id, name, email, password, LENGTH(password) AS password_length
FROM users
WHERE email = 'testuser@gmail.com';

USE jobportal;

DELETE FROM users
WHERE email = 'testuser@gmail.com';

USE jobportal;

SELECT * FROM jobs;


USE jobportal;

-- Job 1
UPDATE jobs
SET
title = 'Senior Java Developer',
company = 'TCS',
location = 'Mumbai',
job_type = 'Full Time',
salary = '₹8-12 LPA',
experience = '2-4 Years',
skills = 'Java, Spring Boot, MySQL, REST API',
description = 'Develop scalable Java applications and REST APIs.'
WHERE id = 1;


-- Job 2
UPDATE jobs
SET
title = 'Software Developer',
company = 'Infosys',
location = 'Pune',
job_type = 'Full Time',
salary = '₹6-10 LPA',
experience = '0-2 Years',
skills = 'Java, Python, SQL, Git',
description = 'Build and maintain software applications using modern technologies.'
WHERE id = 2;


-- Job 3
UPDATE jobs
SET
title = 'Web Developer',
company = 'Wipro',
location = 'Bangalore',
job_type = 'Full Time',
salary = '₹5-8 LPA',
experience = 'Fresher',
skills = 'HTML, CSS, JavaScript, React',
description = 'Develop responsive and user-friendly web applications.'
WHERE id = 3;


-- Job 4
UPDATE jobs
SET
title = 'Python Developer',
company = 'Accenture',
location = 'Pune',
job_type = 'Full Time',
salary = '₹6-9 LPA',
experience = '0-2 Years',
skills = 'Python, Django, SQL, REST API',
description = 'Develop backend applications and REST APIs using Python.'
WHERE id = 4;


-- Check final data
SELECT * FROM jobs;




USE jobportal;

DELETE FROM jobs
WHERE id = 6;

SELECT * FROM jobs;



















USE jobportal;

INSERT INTO jobs
(title, company, location, job_type, salary, experience, skills, description)
VALUES

('Frontend Developer',
 'Capgemini',
 'Pune',
 'Full Time',
 '₹5-8 LPA',
 '0-2 Years',
 'HTML, CSS, JavaScript, React',
 'Develop responsive and user-friendly web applications and interfaces.'),

('Backend Developer',
 'Cognizant',
 'Mumbai',
 'Full Time',
 '₹6-10 LPA',
 '0-2 Years',
 'Java, Spring Boot, MySQL, REST API',
 'Build and maintain backend services and REST APIs for enterprise applications.'),

('Data Analyst',
 'Deloitte',
 'Hyderabad',
 'Full Time',
 '₹5-9 LPA',
 'Fresher',
 'Python, SQL, Excel, Power BI',
 'Analyze business data and create reports and dashboards to support decision making.'),

('Software Engineer',
 'Accenture',
 'Bangalore',
 'Full Time',
 '₹6-10 LPA',
 '0-2 Years',
 'Java, Python, SQL, Git',
 'Design, develop and test software solutions for business applications.'),

('Python Developer Intern',
 'TCS',
 'Pune',
 'Internship',
 '₹15,000/month',
 'Fresher',
 'Python, Django, SQL',
 'Work with the development team to build and test Python-based applications.'),

('Java Developer Intern',
 'Infosys',
 'Bangalore',
 'Internship',
 '₹18,000/month',
 'Fresher',
 'Java, Spring Boot, MySQL',
 'Assist in developing Java applications and learning enterprise software development.'),

('Web Development Intern',
 'Wipro',
 'Hyderabad',
 'Internship',
 '₹12,000/month',
 'Fresher',
 'HTML, CSS, JavaScript',
 'Create responsive web pages and assist the team in frontend development.'),

('Machine Learning Intern',
 'IBM',
 'Pune',
 'Internship',
 '₹20,000/month',
 'Fresher',
 'Python, Machine Learning, Pandas, NumPy',
 'Assist in developing machine learning models and analyzing datasets.'),

('Full Stack Developer',
 'Tech Mahindra',
 'Pune',
 'Full Time',
 '₹7-12 LPA',
 '2-4 Years',
 'Java, Spring Boot, React, MySQL',
 'Develop full stack web applications using modern frontend and backend technologies.'),

('Cloud Engineer',
 'HCLTech',
 'Chennai',
 'Full Time',
 '₹7-11 LPA',
 '2-4 Years',
 'AWS, Linux, Docker, Git',
 'Manage cloud infrastructure and support deployment of scalable applications.'),

('Software Testing Intern',
 'Persistent Systems',
 'Pune',
 'Internship',
 '₹15,000/month',
 'Fresher',
 'Manual Testing, SQL, Selenium',
 'Assist in testing software applications and identifying defects.'),

('UI UX Designer',
 'Adobe',
 'Bangalore',
 'Full Time',
 '₹6-10 LPA',
 '0-2 Years',
 'Figma, UI Design, UX Research',
 'Design intuitive user interfaces and improve user experience across digital products.')
;

SELECT * FROM jobs;





USE jobportal;

SELECT id, title, company
FROM jobs
ORDER BY id;




USE jobportal;

UPDATE jobs SET category = 'Software Development' WHERE id = 1;
UPDATE jobs SET category = 'Software Development' WHERE id = 2;
UPDATE jobs SET category = 'Software Development' WHERE id = 3;

UPDATE jobs SET category = 'Software Development' WHERE id = 7;
UPDATE jobs SET category = 'Software Development' WHERE id = 8;
UPDATE jobs SET category = 'Data & Analytics' WHERE id = 9;
UPDATE jobs SET category = 'Software Development' WHERE id = 10;
UPDATE jobs SET category = 'Software Development' WHERE id = 11;
UPDATE jobs SET category = 'Software Development' WHERE id = 12;
UPDATE jobs SET category = 'Software Development' WHERE id = 13;

UPDATE jobs SET category = 'AI & Machine Learning' WHERE id = 14;

UPDATE jobs SET category = 'Software Development' WHERE id = 15;
UPDATE jobs SET category = 'Cloud & DevOps' WHERE id = 16;
UPDATE jobs SET category = 'Software Testing' WHERE id = 17;
UPDATE jobs SET category = 'Design & Creative' WHERE id = 18;

SELECT id, title, company, category
FROM jobs
ORDER BY id;