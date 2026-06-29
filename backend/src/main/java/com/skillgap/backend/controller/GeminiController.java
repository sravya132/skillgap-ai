package com.skillgap.backend.controller;

import com.skillgap.backend.dto.GeminiResponse;
import com.skillgap.backend.service.GeminiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/gemini")
@CrossOrigin("*")
public class GeminiController {

    @Autowired
    private GeminiService geminiService;

    @GetMapping("/test")
    public GeminiResponse testGemini() {

        return geminiService.askGemini(
                "Tell me about Java Spring Boot in 5 lines"
        );
    }
}