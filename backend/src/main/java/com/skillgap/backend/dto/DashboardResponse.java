package com.skillgap.backend.dto;

public class DashboardResponse {

    private String jobTitle;
    private int totalCandidates;
    private String topCandidate;
    private double topScore;
    private double averageScore;

    public DashboardResponse(
            String jobTitle,
            int totalCandidates,
            String topCandidate,
            double topScore,
            double averageScore
    ) {
        this.jobTitle = jobTitle;
        this.totalCandidates = totalCandidates;
        this.topCandidate = topCandidate;
        this.topScore = topScore;
        this.averageScore = averageScore;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public int getTotalCandidates() {
        return totalCandidates;
    }

    public String getTopCandidate() {
        return topCandidate;
    }

    public double getTopScore() {
        return topScore;
    }

    public double getAverageScore() {
        return averageScore;
    }
}