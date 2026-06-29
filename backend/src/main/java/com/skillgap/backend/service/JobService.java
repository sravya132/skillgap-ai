package com.skillgap.backend.service;

import com.skillgap.backend.dto.*;
import com.skillgap.backend.entity.Resume;
import com.skillgap.backend.repository.ResumeRepository;
import com.skillgap.backend.dto.DashboardResponse;

import java.util.*;

import com.skillgap.backend.entity.Job;
import com.skillgap.backend.repository.JobRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private ResumeRepository resumeRepository;

    @Autowired
    private PdfService pdfService;

    @Autowired
    private SkillAnalysisService skillAnalysisService;

    public Job createJob(JobRequest request) {

        Job job = new Job();

        job.setJobTitle(
                request.getJobTitle()
        );

        job.setCompanyName(
                request.getCompanyName()
        );

        job.setDescription(
                request.getDescription()
        );

        return jobRepository.save(job);
    }

    public MatchResponse matchResumeToJob(
            Long resumeId,
            Long jobId
    ) throws Exception {

        Resume resume =
                resumeRepository.findById(resumeId)
                        .orElse(null);

        Job job =
                jobRepository.findById(jobId)
                        .orElse(null);

        if (resume == null || job == null) {

            return new MatchResponse(
                    0,
                    new ArrayList<>(),
                    new ArrayList<>()
            );
        }

        String resumeText =
                pdfService.extractText(
                        resume.getFilePath()
                );

        List<String> resumeSkills =
                skillAnalysisService
                        .extractSkills(resumeText);

        String jobDescription =
                job.getDescription()
                        .toLowerCase();

        List<String> matchedSkills =
                new ArrayList<>();

        List<String> missingSkills =
                new ArrayList<>();

        for (String skill : resumeSkills) {

            if (jobDescription.contains(
                    skill.toLowerCase())) {

                matchedSkills.add(skill);
            }
        }

        String[] expectedSkills = {
                "java",
                "spring boot",
                "sql",
                "python",
                "aws",
                "docker",
                "kubernetes",
                "react",
                "javascript",
                "git",
                "github",
                "linux",
                "kafka"
        };

        for (String skill : expectedSkills) {

            if (jobDescription.contains(skill)
                    &&
                    !resumeSkills.contains(skill)) {

                missingSkills.add(skill);
            }
        }

        double score = 0;

        if (matchedSkills.size()
                + missingSkills.size() > 0) {

            score =
                    ((double) matchedSkills.size()
                            /
                            (matchedSkills.size()
                                    + missingSkills.size()))
                            * 100;
        }

        return new MatchResponse(
                score,
                matchedSkills,
                missingSkills
        );
    }

    public List<CandidateRankingResponse> rankCandidates(
            Long jobId
    ) throws Exception {

        Job job = jobRepository.findById(jobId)
                .orElse(null);

        if (job == null) {
            return new ArrayList<>();
        }

        List<CandidateRankingResponse> rankings =
                new ArrayList<>();

        List<Resume> resumes =
                resumeRepository.findAll();

        for (Resume resume : resumes) {

            MatchResponse match =
                    matchResumeToJob(
                            resume.getId(),
                            jobId
                    );

            rankings.add(
                    new CandidateRankingResponse(
                            resume.getCandidateName(),
                            match.getMatchPercentage()
                    )
            );
        }

        rankings.sort(
                (a, b) ->
                        Double.compare(
                                b.getScore(),
                                a.getScore()
                        )
        );

        return rankings;
    }
    public RecommendationResponse getRecommendations(
            Long resumeId,
            Long jobId
    ) throws Exception {

        Resume resume =
                resumeRepository.findById(resumeId)
                        .orElse(null);

        if (resume == null) {
            return null;
        }

        MatchResponse match =
                matchResumeToJob(
                        resumeId,
                        jobId
                );

        List<String> recommendations =
                new ArrayList<>();

        for (String skill :
                match.getMissingSkills()) {

            recommendations.add(
                    "Learn " + skill
            );
        }

        return new RecommendationResponse(
                resume.getCandidateName(),
                match.getMatchPercentage(),
                match.getMissingSkills(),
                recommendations
        );
    }
    public MissingSkillsResponse getMissingSkills(
            Long resumeId,
            Long jobId
    ) throws Exception
    {
        Resume resume =
                resumeRepository.findById(resumeId)
                        .orElse(null);

        if (resume == null) {

            return new MissingSkillsResponse(
                    "Resume Not Found",
                    new ArrayList<>(),
                    new ArrayList<>()
            );
        }

        MatchResponse match =
                matchResumeToJob(
                        resumeId,
                        jobId
                );

        return new MissingSkillsResponse(
                resume.getCandidateName(),
                match.getMatchedSkills(),
                match.getMissingSkills()
        );
    }
    public DashboardResponse getDashboard(
            Long jobId
    ) throws Exception {

        Job job =
                jobRepository.findById(jobId)
                        .orElse(null);

        if (job == null) {

            return new DashboardResponse(
                    "Job Not Found",
                    0,
                    "",
                    0,
                    0
            );
        }

        List<CandidateRankingResponse> rankings =
                rankCandidates(jobId);

        if (rankings.isEmpty()) {

            return new DashboardResponse(
                    job.getJobTitle(),
                    0,
                    "",
                    0,
                    0
            );
        }

        int totalCandidates =
                rankings.size();

        String topCandidate =
                rankings.get(0)
                        .getCandidateName();

        double topScore =
                rankings.get(0)
                        .getScore();

        double averageScore =
                rankings.stream()
                        .mapToDouble(
                                CandidateRankingResponse::getScore
                        )
                        .average()
                        .orElse(0);

        return new DashboardResponse(
                job.getJobTitle(),
                totalCandidates,
                topCandidate,
                topScore,
                averageScore
        );
    }
    public List<ShortlistedCandidateResponse>
    shortlistCandidates(Long jobId)
            throws Exception {

        List<CandidateRankingResponse> rankings =
                rankCandidates(jobId);

        List<ShortlistedCandidateResponse> shortlisted =
                new ArrayList<>();

        for (CandidateRankingResponse candidate
                : rankings) {

            if (candidate.getScore() >= 70) {

                shortlisted.add(
                        new ShortlistedCandidateResponse(
                                candidate.getCandidateName(),
                                candidate.getScore()
                        )
                );
            }
        }

        return shortlisted;
    }
    public InterviewQuestionResponse
    generateInterviewQuestions(
            Long resumeId,
            Long jobId
    ) throws Exception {

        Resume resume =
                resumeRepository.findById(resumeId)
                        .orElse(null);

        MatchResponse match =
                matchResumeToJob(
                        resumeId,
                        jobId
                );

        List<String> questions =
                new ArrayList<>();

        for(String skill :
                match.getMissingSkills()) {

            questions.add(
                    "Explain " + skill
            );

            questions.add(
                    "Where have you used "
                            + skill + "?"
            );

            questions.add(
                    "Real-world use cases of "
                            + skill
            );
        }

        return new InterviewQuestionResponse(
                resume.getCandidateName(),
                questions
        );
    }


}