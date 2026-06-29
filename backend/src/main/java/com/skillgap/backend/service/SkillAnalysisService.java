package com.skillgap.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import com.skillgap.backend.entity.Skill;
import com.skillgap.backend.repository.SkillRepository;

@Service
public class SkillAnalysisService {

    @Autowired
    private SkillRepository skillRepository;

    public List<String> extractSkills(String text) {

        List<Skill> skillsDatabase =
                skillRepository.findAll();

        List<String> foundSkills = new ArrayList<>();

        text = text.toLowerCase();

        for (Skill skill : skillsDatabase) {

            String skillName =
                    skill.getSkillName()
                            .toLowerCase();

            if(text.contains(skillName)) {

                foundSkills.add(skillName);
            }
        }

        return foundSkills;
    }
}