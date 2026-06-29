package com.skillgap.backend.controller;

import com.skillgap.backend.entity.Skill;
import com.skillgap.backend.service.SkillService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin("*")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @PostMapping("/add")
    public Skill addSkill(
            @RequestBody Skill skill
    ) {

        return skillService.addSkill(skill);
    }

    @GetMapping("/all")
    public List<Skill> getAllSkills() {

        return skillService.getAllSkills();
    }
}