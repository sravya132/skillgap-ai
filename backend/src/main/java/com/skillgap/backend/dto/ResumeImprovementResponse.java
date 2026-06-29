package com.skillgap.backend.dto;

public class ResumeImprovementResponse {

    private String improvement;

    public ResumeImprovementResponse() {
    }

    public ResumeImprovementResponse(String improvement) {
        this.improvement = improvement;
    }

    public String getImprovement() {
        return improvement;
    }

    public void setImprovement(String improvement) {
        this.improvement = improvement;
    }
}