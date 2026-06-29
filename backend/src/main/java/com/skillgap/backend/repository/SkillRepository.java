package com.skillgap.backend.repository;

import com.skillgap.backend.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository
        extends JpaRepository<Skill, Long> {
}