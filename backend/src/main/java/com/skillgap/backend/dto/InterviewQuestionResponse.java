package com.skillgap.backend.dto;

import java.util.List;

public class InterviewQuestionResponse {

    private String candidateName;
    private List<String> questions;

    public InterviewQuestionResponse(
            String candidateName,
            List<String> questions
    ) {
        this.candidateName = candidateName;
        this.questions = questions;
    }

    public String getCandidateName() {
        return candidateName;
    }

    public List<String> getQuestions() {
        return questions;
    }
}