package com.skillgap.backend.controller;

import com.skillgap.backend.dto.*;

import java.util.List;
import com.skillgap.backend.dto.DashboardResponse;
import com.skillgap.backend.entity.Job;
import com.skillgap.backend.service.JobService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/job")
@CrossOrigin("*")
public class JobController {

    @Autowired
    private JobService jobService;

    @PostMapping("/create")
    public Job createJob(
            @RequestBody JobRequest request
    ) {

        return jobService.createJob(request);
    }
    @PostMapping("/match/{resumeId}/{jobId}")
    public MatchResponse matchResumeToJob(

            @PathVariable Long resumeId,

            @PathVariable Long jobId

    ) throws Exception {

        return jobService.matchResumeToJob(
                resumeId,
                jobId
        );
    }
    @GetMapping("/rank/{jobId}")
    public List<CandidateRankingResponse> rankCandidates(
            @PathVariable Long jobId
    ) throws Exception {

        return jobService.rankCandidates(jobId);
    }
    @GetMapping("/recommend/{resumeId}/{jobId}")
    public RecommendationResponse recommendSkills(
            @PathVariable Long resumeId,
            @PathVariable Long jobId
    ) throws Exception {

        return jobService.getRecommendations(
                resumeId,
                jobId
        );
    }
    @GetMapping("/missing/{resumeId}/{jobId}")
    public MissingSkillsResponse getMissingSkills(
            @PathVariable Long resumeId,
            @PathVariable Long jobId
    ) throws Exception {

        return jobService.getMissingSkills(
                resumeId,
                jobId
        );
    }
    @GetMapping("/dashboard/{jobId}")
    public DashboardResponse getDashboard(
            @PathVariable Long jobId
    ) throws Exception {

        return jobService.getDashboard(jobId);
    }
    @GetMapping("/shortlist/{jobId}")
    public List<ShortlistedCandidateResponse>
    shortlistCandidates(
            @PathVariable Long jobId
    ) throws Exception {

        return jobService.shortlistCandidates(
                jobId
        );
    }
    @GetMapping(
            "/interview/{resumeId}/{jobId}"
    )
    public InterviewQuestionResponse
    generateInterviewQuestions(
            @PathVariable Long resumeId,
            @PathVariable Long jobId
    ) throws Exception {

        return jobService
                .generateInterviewQuestions(
                        resumeId,
                        jobId
                );
    }
}