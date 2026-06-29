package com.skillgap.backend.dto;

public class AIResumeSummaryResponse {

    private String candidateName;
    private AISummary summary;

    public AIResumeSummaryResponse() {
    }

    public AIResumeSummaryResponse(
            String candidateName,
            AISummary summary
    ) {
        this.candidateName = candidateName;
        this.summary = summary;
    }

    public String getCandidateName() {
        return candidateName;
    }

    public void setCandidateName(String candidateName) {
        this.candidateName = candidateName;
    }

    public AISummary getSummary() {
        return summary;
    }

    public void setSummary(AISummary summary) {
        this.summary = summary;
    }
}