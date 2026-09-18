package com.jobportal.jobportal;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "saved_jobs")
public class SavedJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int userId;
    private int jobId;

    private LocalDateTime savedDate;

    public SavedJob() {
    }

    public SavedJob(int userId, int jobId, LocalDateTime savedDate) {
        this.userId = userId;
        this.jobId = jobId;
        this.savedDate = savedDate;
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

    public LocalDateTime getSavedDate() {
        return savedDate;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setJobId(int jobId) {
        this.jobId = jobId;
    }

    public void setSavedDate(LocalDateTime savedDate) {
        this.savedDate = savedDate;
    }
}