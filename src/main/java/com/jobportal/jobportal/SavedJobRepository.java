package com.jobportal.jobportal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

public interface SavedJobRepository extends JpaRepository<SavedJob, Integer> {

    List<SavedJob> findByUserId(int userId);

    boolean existsByUserIdAndJobId(int userId, int jobId);

    @Transactional
    void deleteByUserIdAndJobId(int userId, int jobId);
}