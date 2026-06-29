package com.skillgap.backend.dto;

public class ShortlistResponse {

    private String decision;

    public ShortlistResponse() {
    }

    public ShortlistResponse(String decision) {
        this.decision = decision;
    }

    public String getDecision() {
        return decision;
    }

    public void setDecision(String decision) {
        this.decision = decision;
    }
}