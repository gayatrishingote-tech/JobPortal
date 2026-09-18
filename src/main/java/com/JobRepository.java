package com.jobportal.jobportal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Integer> {

    List<Job> findByTitleContainingIgnoreCase(String title);

    List<Job> findByLocationContainingIgnoreCase(String location);

    List<Job> findByCompanyContainingIgnoreCase(String company);

    List<Job> findByCategoryContainingIgnoreCase(String category);

    @Query("SELECT COUNT(DISTINCT j.company) FROM Job j")
    long countDistinctCompanies();
}