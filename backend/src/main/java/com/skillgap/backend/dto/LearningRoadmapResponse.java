package com.skillgap.backend.dto;

public class LearningRoadmapResponse {

    private String roadmap;

    public LearningRoadmapResponse() {
    }

    public LearningRoadmapResponse(String roadmap) {
        this.roadmap = roadmap;
    }

    public String getRoadmap() {
        return roadmap;
    }

    public void setRoadmap(String roadmap) {
        this.roadmap = roadmap;
    }
}