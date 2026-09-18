package com.jobportal.jobportal;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "applications")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int userId;
    private int jobId;

    private LocalDateTime applicationDate;

    private String status;

    public Application() {
    }

    public Application(int userId, int jobId, LocalDateTime applicationDate, String status) {
        this.userId = userId;
        this.jobId = jobId;
        this.applicationDate = applicationDate;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public int getJobId() {
        return jobId;
    }

    public LocalDateTime getApplicationDate() {
        return applicationDate;
    }

    public String getStatus() {
        return status;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setJobId(int jobId) {
        this.jobId = jobId;
    }

    public void setApplicationDate(LocalDateTime applicationDate) {
        this.applicationDate = applicationDate;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}