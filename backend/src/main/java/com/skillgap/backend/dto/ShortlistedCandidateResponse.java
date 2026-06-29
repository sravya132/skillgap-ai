package com.skillgap.backend.dto;

public class ShortlistedCandidateResponse {

    private String candidateName;
    private double score;

    public ShortlistedCandidateResponse(
            String candidateName,
            double score
    ) {
        this.candidateName = candidateName;
        this.score = score;
    }

    public String getCandidateName() {
        return candidateName;
    }

    public double getScore() {
        return score;
    }
}