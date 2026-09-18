package com.jobportal.jobportal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class JobStatsController {

    private final JobRepository jobRepository;

    public JobStatsController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @GetMapping("/job-stats")
    public Map<String, Long> getJobStats() {

        Map<String, Long> stats = new HashMap<>();

        stats.put("totalJobs", jobRepository.count());
        stats.put("totalCompanies", jobRepository.countDistinctCompanies());

        return stats;
    }
}