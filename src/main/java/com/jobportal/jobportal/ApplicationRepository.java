package com.jobportal.jobportal;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {

    List<Application> findByUserId(int userId);

    List<Application> findByJobId(int jobId);

    boolean existsByUserIdAndJobId(int userId, int jobId);
}