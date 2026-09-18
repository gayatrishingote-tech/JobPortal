package com.jobportal.jobportal;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/jobs")
public class JobController {

    private final JobRepository jobRepository;

    public JobController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @GetMapping
    public List<Job> getJobs() {
        return jobRepository.findAll();
    }

    @GetMapping("/search")
    public List<Job> searchJobs(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String company,
            @RequestParam(required = false) String category) {

        if (category != null && !category.isEmpty()) {
            return jobRepository.findByCategoryContainingIgnoreCase(category);
        }

        if (title != null && !title.isEmpty()) {
            return jobRepository.findByTitleContainingIgnoreCase(title);
        }

        if (location != null && !location.isEmpty()) {
            return jobRepository.findByLocationContainingIgnoreCase(location);
        }

        if (company != null && !company.isEmpty()) {
            return jobRepository.findByCompanyContainingIgnoreCase(company);
        }

        return jobRepository.findAll();
    }

    @GetMapping("/{id}")
    public Job getJobById(@PathVariable int id) {
        return jobRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Job addJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    @PutMapping("/{id}")
    public Job updateJob(
            @PathVariable int id,
            @RequestBody Job updatedJob) {

        Job existingJob = jobRepository.findById(id).orElse(null);

        if (existingJob == null) {
            return null;
        }

        existingJob.setTitle(updatedJob.getTitle());
        existingJob.setCompany(updatedJob.getCompany());
        existingJob.setLocation(updatedJob.getLocation());
        existingJob.setJobType(updatedJob.getJobType());
        existingJob.setSalary(updatedJob.getSalary());
        existingJob.setExperience(updatedJob.getExperience());
        existingJob.setSkills(updatedJob.getSkills());
        existingJob.setDescription(updatedJob.getDescription());
        existingJob.setCategory(updatedJob.getCategory());

        return jobRepository.save(existingJob);
    }

    @DeleteMapping("/{id}")
    public String deleteJob(@PathVariable int id) {

        if (!jobRepository.existsById(id)) {
            return "Job not found";
        }

        jobRepository.deleteById(id);

        return "Job deleted successfully";
    }
}