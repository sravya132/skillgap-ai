package com.skillgap.backend.dto;

public class InterviewQuestionsResponse {

    private String questions;

    public InterviewQuestionsResponse() {
    }

    public InterviewQuestionsResponse(String questions) {
        this.questions = questions;
    }

    public String getQuestions() {
        return questions;
    }

    public void setQuestions(String questions) {
        this.questions = questions;
    }
}