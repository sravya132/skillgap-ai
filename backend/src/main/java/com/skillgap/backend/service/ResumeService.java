package com.skillgap.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.skillgap.backend.dto.*;
import com.skillgap.backend.entity.Resume;
import com.skillgap.backend.repository.ResumeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.skillgap.backend.entity.Job;
import com.skillgap.backend.repository.JobRepository;

import java.io.File;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ResumeService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private ResumeRepository resumeRepository;

    @Autowired
    private PdfService pdfService;

    @Autowired
    private SkillAnalysisService skillAnalysisService;

    @Autowired
    private GeminiService geminiService;

    @Autowired
    private SkillGapAIService skillGapAIService;

    public ResumeResponse uploadResume(MultipartFile file)
            throws Exception {

        String uploadDir =
                System.getProperty("user.dir")
                        + "/uploads/resumes/";

        File dir = new File(uploadDir);

        if (!dir.exists()) {
            dir.mkdirs();
        }

        String filePath =
                uploadDir + file.getOriginalFilename();

        file.transferTo(new File(filePath));

        String extractedText =
                pdfService.extractText(filePath);

        String candidateName =
                extractedText.split("\n")[0];

        List<String> skills =
                skillAnalysisService.extractSkills(
                        extractedText
                );
        Resume resume = new Resume();

        resume.setFileName(
                file.getOriginalFilename()
        );

        resume.setFilePath(filePath);
        resume.setSkills(
                String.join(",", skills)
        );
        resume.setCandidateName(
                candidateName
        );

        Resume savedResume =
                resumeRepository.save(resume);

        return new ResumeResponse(
                savedResume.getId(),
                savedResume.getFileName(),
                savedResume.getFilePath()
        );
    }

    // GET ALL RESUMES
    public List<ResumeResponse> getAllResumes() {

        return resumeRepository.findAll()
                .stream()
                .map(resume ->
                        new ResumeResponse(
                                resume.getId(),
                                resume.getFileName(),
                                resume.getFilePath()
                        )
                )
                .collect(Collectors.toList());
    }

    // DELETE RESUME
    public String deleteResume(Long id) {

        Resume resume =
                resumeRepository.findById(id)
                        .orElse(null);

        if (resume == null) {
            return "Resume Not Found";
        }

        File file =
                new File(resume.getFilePath());

        if (file.exists()) {
            file.delete();
        }

        resumeRepository.delete(resume);

        return "Resume Deleted Successfully";
    }
    // ANALYZE RESUME
    public ResumeAnalysisResponse analyzeResume(Long id)
            throws Exception {

        Resume resume =
                resumeRepository.findById(id)
                        .orElse(null);

        if (resume == null) {

            return new ResumeAnalysisResponse(
                    "Resume Not Found"
            );
        }

        String extractedText =
                pdfService.extractText(
                        resume.getFilePath()
                );

        return new ResumeAnalysisResponse(
                extractedText
        );
    }
    public SkillGapResponse analyzeSkills(Long id)
            throws Exception {

        Resume resume =
                resumeRepository.findById(id)
                        .orElse(null);

        if (resume == null) {

            return new SkillGapResponse(
                    null,
                    null,
                    "0%",
                    null,
                    "Resume Not Found"
            );

        }

        String extractedText =
                pdfService.extractText(
                        resume.getFilePath()
                );

        SkillGapAIResponse ai =
                skillGapAIService.analyzeSkillGap(
                        extractedText
                );

        return new SkillGapResponse(

                ai.getSkillsFound(),

                ai.getMissingSkills(),

                ai.getSkillMatch(),

                ai.getRecommendedCourses(),

                ai.getAiSuggestion()

        );

    }
    public AIResumeSummaryResponse getAISummary(Long id)
            throws Exception {

        Resume resume =
                resumeRepository.findById(id)
                        .orElse(null);

        if (resume == null) {

            AISummary summary = new AISummary();
            summary.setProfessionalSummary("Resume not found.");

            return new AIResumeSummaryResponse(
                    "Not Found",
                    summary
            );
        }

        String resumeText =
                pdfService.extractText(
                        resume.getFilePath()
                );

        GeminiResponse response =
                geminiService.summarizeResume(
                        resumeText
                );

        System.out.println("Gemini Response:");
        System.out.println(response.getResponse());

        ObjectMapper mapper = new ObjectMapper();

        AISummary aiSummary;

        try {

            aiSummary =
                    mapper.readValue(
                            response.getResponse(),
                            AISummary.class
                    );

        } catch (Exception e) {

            aiSummary = new AISummary();

            aiSummary.setProfessionalSummary(
                    response.getResponse()
            );

            aiSummary.setOverallRating("Not Available");

            aiSummary.setRecommendation(
                    "Unable to parse structured JSON from Gemini."
            );
        }

        return new AIResumeSummaryResponse(
                resume.getCandidateName(),
                aiSummary
        );
    }
    public InterviewQuestionsResponse generateInterviewQuestions(
            Long resumeId,
            Long jobId
    ) throws Exception {

        Resume resume =
                resumeRepository.findById(resumeId)
                        .orElseThrow();

        Job job =
                jobRepository.findById(jobId)
                        .orElseThrow();

        String resumeText =
                pdfService.extractText(
                        resume.getFilePath()
                );

        GeminiResponse response =
                geminiService.generateInterviewQuestions(
                        resumeText,
                        job.getDescription()
                );

        return new InterviewQuestionsResponse(
                response.getResponse()
        );
    }
    public RecruiterFeedbackResponse getRecruiterFeedback(
            Long resumeId,
            Long jobId
    ) throws Exception {

        Resume resume =
                resumeRepository.findById(resumeId)
                        .orElseThrow();

        Job job =
                jobRepository.findById(jobId)
                        .orElseThrow();

        String resumeText =
                pdfService.extractText(
                        resume.getFilePath()
                );

        GeminiResponse response =
                geminiService.recruiterFeedback(
                        resumeText,
                        job.getDescription()
                );

        return new RecruiterFeedbackResponse(
                response.getResponse()
        );
    }
    public ResumeImprovementResponse improveResume(
            Long resumeId
    ) throws Exception {

        Resume resume =
                resumeRepository.findById(resumeId)
                        .orElseThrow();

        String resumeText =
                pdfService.extractText(
                        resume.getFilePath()
                );

        GeminiResponse response =
                geminiService.improveResume(
                        resumeText
                );

        return new ResumeImprovementResponse(
                response.getResponse()
        );
    }
    public ShortlistResponse shortlistCandidate(
            Long resumeId,
            Long jobId
    ) throws Exception {

        Resume resume =
                resumeRepository.findById(resumeId)
                        .orElseThrow();

        Job job =
                jobRepository.findById(jobId)
                        .orElseThrow();

        String resumeText =
                pdfService.extractText(
                        resume.getFilePath()
                );

        GeminiResponse response =
                geminiService.shortlistCandidate(
                        resumeText,
                        job.getDescription()
                );

        return new ShortlistResponse(
                response.getResponse()
        );
    }
    public LearningRoadmapResponse learningRoadmap(
            Long resumeId,
            Long jobId
    ) throws Exception {

        Resume resume =
                resumeRepository.findById(resumeId)
                        .orElseThrow();

        Job job =
                jobRepository.findById(jobId)
                        .orElseThrow();

        String resumeText =
                pdfService.extractText(
                        resume.getFilePath()
                );

        GeminiResponse response =
                geminiService.generateLearningRoadmap(
                        resumeText,
                        job.getDescription()
                );

        return new LearningRoadmapResponse(
                response.getResponse()
        );
    }
}