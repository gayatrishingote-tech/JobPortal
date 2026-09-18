package com.jobportal.jobportal;

import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/saved-jobs")
public class SavedJobController {

    private final SavedJobRepository savedJobRepository;

    public SavedJobController(SavedJobRepository savedJobRepository) {
        this.savedJobRepository = savedJobRepository;
    }

    // Save a job
    @PostMapping
    public Object saveJob(@RequestBody SavedJob savedJob) {

        boolean alreadySaved = savedJobRepository
                .existsByUserIdAndJobId(savedJob.getUserId(), savedJob.getJobId());

        if (alreadySaved) {
            return "Job is already saved.";
        }

        savedJob.setSavedDate(LocalDateTime.now());

        return savedJobRepository.save(savedJob);
    }

    // Get saved jobs of a user
    @GetMapping("/user/{userId}")
    public List<SavedJob> getSavedJobs(@PathVariable int userId) {
        return savedJobRepository.findByUserId(userId);
    }

    // Remove saved job
    @DeleteMapping("/user/{userId}/job/{jobId}")
    public String removeSavedJob(
            @PathVariable int userId,
            @PathVariable int jobId) {

        boolean exists = savedJobRepository
                .existsByUserIdAndJobId(userId, jobId);

        if (!exists) {
            return "Saved job not found.";
        }

        savedJobRepository.deleteByUserIdAndJobId(userId, jobId);

        return "Job removed from saved jobs.";
    }
}