package com.skillgap.backend.dto;

import java.util.List;

public class RecommendationResponse {

    private String candidateName;
    private double score;
    private List<String> missingSkills;
    private List<String> recommendations;

    public RecommendationResponse(
            String candidateName,
            double score,
            List<String> missingSkills,
            List<String> recommendations
    ) {
        this.candidateName = candidateName;
        this.score = score;
        this.missingSkills = missingSkills;
        this.recommendations = recommendations;
    }

    public String getCandidateName() {
        return candidateName;
    }

    public double getScore() {
        return score;
    }

    public List<String> getMissingSkills() {
        return missingSkills;
    }

    public List<String> getRecommendations() {
        return recommendations;
    }
}