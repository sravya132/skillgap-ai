package com.skillgap.backend.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import com.skillgap.backend.dto.GeminiResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    public GeminiResponse askGemini(String prompt) {

        try {

            Client client =
                    Client.builder()
                            .apiKey(apiKey)
                            .build();

            GenerateContentResponse response =
                    client.models.generateContent(
                            "gemini-2.5-flash",
                            prompt,
                            null
                    );

            return new GeminiResponse(
                    response.text()
            );

        } catch (Exception e) {

            return new GeminiResponse(
                    "Gemini Error : " + e.getMessage()
            );
        }
    }
    public GeminiResponse summarizeResume(String resumeText) {

        String prompt = """
You are an expert ATS recruiter.

Analyze the following resume and return ONLY valid JSON.

Return exactly in this format:

{
  "professionalSummary":"",
  "strengths":[],
  "weaknesses":[],
  "overallRating":"",
  "recommendation":""
}

Do not add any explanation.
Do not use markdown.
Do not wrap the JSON in ```.

Resume:

""" + resumeText;

        return askGemini(prompt);
    }
    public GeminiResponse generateInterviewQuestions(
            String resumeText,
            String jobDescription
    ) {

        String prompt = """
You are a Senior Software Engineering Interviewer at Google, Microsoft and Amazon.

Your task is to generate personalized interview questions for this candidate.

Analyze BOTH the resume and the job description carefully.

Instructions:

1. Ask questions ONLY based on technologies mentioned in the resume.
2. Give higher priority to the candidate's strongest skills.
3. If the job requires skills missing from the resume, generate questions to test learning ability.
4. Include practical coding and real-world scenario questions.
5. Avoid generic questions.

Return the response in the following format:

==============================
TECHNICAL QUESTIONS
==============================

For each question include:

Question:
Expected Answer:
Difficulty: Easy / Medium / Hard
Why recruiter asks this:

Generate 10 questions.

==============================
HR QUESTIONS
==============================

Generate 5 personalized HR questions based on the resume.

==============================
SCENARIO QUESTIONS
==============================

Generate 5 real-world scenarios related to this job.

==============================
FINAL EVALUATION
==============================

Candidate Strengths

Candidate Weaknesses

Topics to Revise Before Interview

Estimated Technical Round Score (/10)

Estimated HR Round Score (/10)

Overall Hiring Probability (%)

Resume:

""" + resumeText +

                """
                
                Job Description:
                
                """ + jobDescription;

        return askGemini(prompt);
    }
    public GeminiResponse recruiterFeedback(
            String resumeText,
            String jobDescription
    ) {

        String prompt = """
You are a Senior Technical Recruiter.

Analyze the candidate.

Return:

1. Hiring Decision

2. Strengths

3. Weaknesses

4. Risk Factors

5. Final Recommendation

Resume:

""" + resumeText + """

Job Description:

""" + jobDescription;

        return askGemini(prompt);
    }
    public GeminiResponse improveResume(String resumeText) {

        String prompt = """
You are a Senior ATS Resume Reviewer.

Analyze this resume.

Return:

1. ATS Score out of 100

2. Resume Strengths

3. Resume Weaknesses

4. Missing Information

5. Improvements

6. Final Advice

Be specific.

Resume:

""" + resumeText;

        return askGemini(prompt);
    }
    public GeminiResponse shortlistCandidate(
            String resumeText,
            String jobDescription
    ) {

        String prompt = """
You are an experienced Technical Recruiter.

Analyze the resume and job description.

Return:

1. Hire Decision (SHORTLIST / HOLD / REJECT)

2. Confidence Score (0-100)

3. Reasons

4. Candidate Strengths

5. Candidate Weaknesses

6. Risk Factors

7. Final Recommendation

Resume:

""" + resumeText +

                """
                
                Job Description:
                
                """ + jobDescription;

        return askGemini(prompt);
    }
    public GeminiResponse generateLearningRoadmap(
            String resumeText,
            String jobDescription
    ) {

        String prompt = """
You are an expert Software Engineering Mentor.

Analyze the candidate's resume and compare it with the job description.

Generate a personalized learning roadmap.

Return:

1. Current Skills
2. Missing Skills
3. Weekly Learning Plan (Week 1 to Week 6)
4. Recommended Resources
5. Interview Preparation Tips
6. Estimated Readiness Percentage

Resume:

""" + resumeText +

                """
                
                Job Description:
                
                """ + jobDescription;

        return askGemini(prompt);
    }
}