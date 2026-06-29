package com.skillgap.backend.dto;

public class RecruiterFeedbackResponse {

    private String feedback;

    public RecruiterFeedbackResponse() {
    }

    public RecruiterFeedbackResponse(String feedback) {
        this.feedback = feedback;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
}