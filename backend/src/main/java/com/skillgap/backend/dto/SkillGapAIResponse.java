package com.skillgap.backend.dto;

import java.util.List;

public class SkillGapAIResponse {

    private List<String> skillsFound;
    private List<String> missingSkills;
    private String skillMatch;
    private List<String> recommendedCourses;
    private String aiSuggestion;

    public SkillGapAIResponse() {
    }

    public List<String> getSkillsFound() {
        return skillsFound;
    }

    public void setSkillsFound(List<String> skillsFound) {
        this.skillsFound = skillsFound;
    }

    public List<String> getMissingSkills() {
        return missingSkills;
    }

    public void setMissingSkills(List<String> missingSkills) {
        this.missingSkills = missingSkills;
    }

    public String getSkillMatch() {
        return skillMatch;
    }

    public void setSkillMatch(String skillMatch) {
        this.skillMatch = skillMatch;
    }

    public List<String> getRecommendedCourses() {
        return recommendedCourses;
    }

    public void setRecommendedCourses(List<String> recommendedCourses) {
        this.recommendedCourses = recommendedCourses;
    }

    public String getAiSuggestion() {
        return aiSuggestion;
    }

    public void setAiSuggestion(String aiSuggestion) {
        this.aiSuggestion = aiSuggestion;
    }
}