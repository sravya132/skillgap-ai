package com.skillgap.backend.dto;

import java.util.List;

public class MissingSkillsResponse {

    private String candidateName;
    private List<String> matchedSkills;
    private List<String> missingSkills;

    public MissingSkillsResponse(
            String candidateName,
            List<String> matchedSkills,
            List<String> missingSkills
    ) {
        this.candidateName = candidateName;
        this.matchedSkills = matchedSkills;
        this.missingSkills = missingSkills;
    }

    public String getCandidateName() {
        return candidateName;
    }

    public List<String> getMatchedSkills() {
        return matchedSkills;
    }

    public List<String> getMissingSkills() {
        return missingSkills;
    }
}