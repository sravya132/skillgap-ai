package com.skillgap.backend.service;

import com.skillgap.backend.dto.LoginRequest;
import com.skillgap.backend.dto.LoginResponse;
import com.skillgap.backend.dto.RegisterRequest;
import com.skillgap.backend.entity.User;
import com.skillgap.backend.repository.UserRepository;
import com.skillgap.backend.security.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    private final BCryptPasswordEncoder encoder =
            new BCryptPasswordEncoder();

    // REGISTER USER
    public String register(RegisterRequest request) {

        if (userRepository.findByEmail(
                request.getEmail()).isPresent()) {

            return "Email already exists";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        user.setPassword(
                encoder.encode(
                        request.getPassword()
                )
        );

        userRepository.save(user);

        return "User Registered Successfully";
    }

    // LOGIN USER
    // LOGIN USER
    public LoginResponse login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {

            return new LoginResponse(
                    "User Not Found",
                    null,
                    null
            );
        }

        boolean passwordMatched =
                encoder.matches(
                        request.getPassword(),
                        user.getPassword()
                );

        if (!passwordMatched) {

            return new LoginResponse(
                    "Invalid Password",
                    null,
                    null
            );
        }

        String token =
                jwtService.generateToken(
                        user.getEmail()
                );

        return new LoginResponse(
                token,
                user.getName(),
                user.getEmail()
        );
    }
}