package com.skillgap.backend.repository;

import com.skillgap.backend.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository
        extends JpaRepository<Job, Long> {
}