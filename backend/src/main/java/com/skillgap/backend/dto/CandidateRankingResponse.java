package com.skillgap.backend.dto;

public class CandidateRankingResponse {

    private String candidateName;
    private double score;

    public CandidateRankingResponse(
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