package com.jobportal.jobportal;

import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/applications")
public class ApplicationController {

    private final ApplicationRepository applicationRepository;

    public ApplicationController(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    // Apply for a job
    @PostMapping
    public Object applyForJob(@RequestBody Application application) {

        boolean alreadyApplied = applicationRepository
            .existsByUserIdAndJobId(application.getUserId(), application.getJobId());

        if (alreadyApplied) {
            return "You have already applied for this job.";
        }

        application.setApplicationDate(LocalDateTime.now());
        application.setStatus("Applied");

        return applicationRepository.save(application);
    }

    // Get applications of a user
    @GetMapping("/user/{userId}")
    public List<Application> getUserApplications(@PathVariable int userId) {
        return applicationRepository.findByUserId(userId);
    }

    // Get applications for a job
    @GetMapping("/job/{jobId}")
    public List<Application> getJobApplications(@PathVariable int jobId) {
        return applicationRepository.findByJobId(jobId);
    }
}