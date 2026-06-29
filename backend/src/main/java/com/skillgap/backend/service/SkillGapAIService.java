package com.skillgap.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.skillgap.backend.dto.SkillGapAIResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillGapAIService {

    @Autowired
    private GeminiService geminiService;

    @Autowired
    private ObjectMapper objectMapper;

    public SkillGapAIResponse analyzeSkillGap(
            String resumeText
    ) throws Exception {

        String prompt = """
You are an expert Technical Recruiter.

Analyze the following resume.

Return ONLY valid JSON.

{
  "skillsFound": [],
  "missingSkills": [],
  "skillMatch": "",
  "recommendedCourses": [],
  "aiSuggestion": ""
}

Resume:
""" + resumeText;

        String response =
                geminiService.askGemini(prompt).getResponse();

        response = response
                .replace("```json", "")
                .replace("```", "")
                .trim();

        System.out.println("===== GEMINI RESPONSE =====");
        System.out.println(response);
        System.out.println("===========================");

// If Gemini returned an error instead of JSON
        if (!response.startsWith("{")) {
            throw new RuntimeException(
                    "Gemini did not return valid JSON:\n" + response
            );
        }

        return objectMapper.readValue(
                response,
                SkillGapAIResponse.class
        );
    }
}