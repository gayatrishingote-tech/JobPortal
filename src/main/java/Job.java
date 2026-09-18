package com.jobportal.jobportal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String company;
    private String location;

    @Column(name = "job_type")
    private String jobType;

    private String salary;
    private String experience;
    private String skills;
    private String description;
    private String category;

    public Job() {
    }

    public Job(
            String title,
            String company,
            String location,
            String jobType,
            String salary,
            String experience,
            String skills,
            String description,
            String category) {

        this.title = title;
        this.company = company;
        this.location = location;
        this.jobType = jobType;
        this.salary = salary;
        this.experience = experience;
        this.skills = skills;
        this.description = description;
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getCompany() {
        return company;
    }

    public String getLocation() {
        return location;
    }

    public String getJobType() {
        return jobType;
    }

    public String getSalary() {
        return salary;
    }

    public String getExperience() {
        return experience;
    }

    public String getSkills() {
        return skills;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setJobType(String jobType) {
        this.jobType = jobType;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}