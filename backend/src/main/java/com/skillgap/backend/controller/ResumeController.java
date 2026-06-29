package com.skillgap.backend.controller;
import com.skillgap.backend.dto.*;
import com.skillgap.backend.service.ResumeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.skillgap.backend.dto.RecruiterFeedbackResponse;
import com.skillgap.backend.dto.ResumeImprovementResponse;
import com.skillgap.backend.dto.ShortlistResponse;
import com.skillgap.backend.dto.LearningRoadmapResponse;
import java.util.List;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin("*")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    @PostMapping("/upload")
    public ResumeResponse uploadResume(
            @RequestParam("file")
            MultipartFile file
    ) throws Exception {

        return resumeService.uploadResume(file);
    }

    @GetMapping("/all")
    public List<ResumeResponse> getAllResumes() {

        return resumeService.getAllResumes();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteResume(
            @PathVariable Long id
    ) {

        return resumeService.deleteResume(id);
    }
    @PostMapping("/analyze/{id}")
    public ResumeAnalysisResponse analyzeResume(
            @PathVariable Long id
    ) throws Exception {

        return resumeService.analyzeResume(id);
    }
    @PostMapping("/skills/{id}")
    public SkillGapResponse getSkills(
            @PathVariable Long id
    ) throws Exception {

        return resumeService.analyzeSkills(id);
    }
    @GetMapping("/ai-summary/{id}")
    public AIResumeSummaryResponse aiSummary(
            @PathVariable Long id
    ) throws Exception {

        return resumeService.getAISummary(id);
    }
    @GetMapping("/interview/{resumeId}/{jobId}")
    public InterviewQuestionsResponse interviewQuestions(
            @PathVariable Long resumeId,
            @PathVariable Long jobId
    ) throws Exception {

        return resumeService.generateInterviewQuestions(
                resumeId,
                jobId
        );
    }
    @GetMapping("/feedback/{resumeId}/{jobId}")
    public RecruiterFeedbackResponse recruiterFeedback(
            @PathVariable Long resumeId,
            @PathVariable Long jobId
    ) throws Exception {

        return resumeService.getRecruiterFeedback(
                resumeId,
                jobId
        );
    }
    @GetMapping("/improve/{resumeId}")
    public ResumeImprovementResponse improveResume(
            @PathVariable Long resumeId
    ) throws Exception {

        return resumeService.improveResume(
                resumeId
        );
    }
    @GetMapping("/shortlist/{resumeId}/{jobId}")
    public ShortlistResponse shortlistCandidate(
            @PathVariable Long resumeId,
            @PathVariable Long jobId
    ) throws Exception {

        return resumeService.shortlistCandidate(
                resumeId,
                jobId
        );
    }
    @GetMapping("/roadmap/{resumeId}/{jobId}")
    public LearningRoadmapResponse learningRoadmap(
            @PathVariable Long resumeId,
            @PathVariable Long jobId
    ) throws Exception {

        return resumeService.learningRoadmap(
                resumeId,
                jobId
        );
    }
}