package com.skillgap.backend.dto;

public class ResumeAnalysisResponse {

    private String extractedText;

    public ResumeAnalysisResponse() {
    }

    public ResumeAnalysisResponse(String extractedText) {
        this.extractedText = extractedText;
    }

    public String getExtractedText() {
        return extractedText;
    }

    public void setExtractedText(String extractedText) {
        this.extractedText = extractedText;
    }
}