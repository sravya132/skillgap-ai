package com.skillgap.backend.controller;

import com.skillgap.backend.dto.LoginRequest;
import com.skillgap.backend.dto.LoginResponse;
import com.skillgap.backend.dto.RegisterRequest;
import com.skillgap.backend.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;

    // REGISTER API

    @PostMapping("/register")
    public String register(
            @RequestBody RegisterRequest request) {

        return authService.register(request);
    }

    // LOGIN API

    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request) {

        return authService.login(request);
    }
}