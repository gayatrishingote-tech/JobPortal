package com.jobportal.jobportal;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    // ================= REGISTER =================

    @PostMapping("/register")
    public Object registerUser(@RequestBody User user) {

        User existingUser =
                userRepository.findByEmail(user.getEmail());

        if (existingUser != null) {
            return "Email already registered.";
        }

        String encodedPassword =
                passwordEncoder.encode(user.getPassword());

        user.setPassword(encodedPassword);

        return userRepository.save(user);
    }


    // ================= LOGIN =================

    @PostMapping("/login")
    public Object loginUser(@RequestBody User loginUser) {

        User user =
                userRepository.findByEmail(loginUser.getEmail());

        if (user == null) {
            return "Invalid email or password.";
        }

        String enteredPassword =
                loginUser.getPassword();

        String storedPassword =
                user.getPassword();

        if (passwordEncoder.matches(
                enteredPassword,
                storedPassword)) {

            return user;
        }

        // For old passwords stored without encryption
        if (enteredPassword.equals(storedPassword)) {

            user.setPassword(
                    passwordEncoder.encode(enteredPassword)
            );

            userRepository.save(user);

            return user;
        }

        return "Invalid email or password.";
    }


    // ================= RESET PASSWORD =================

    @PostMapping("/reset-password")
    public String resetPassword(
            @RequestBody PasswordResetRequest request) {

        User user =
                userRepository.findByEmail(request.getEmail());

        if (user == null) {
            return "Email not registered.";
        }

        if (request.getNewPassword() == null ||
            request.getConfirmPassword() == null) {

            return "Password fields are required.";
        }

        if (!request.getNewPassword()
                .equals(request.getConfirmPassword())) {

            return "Passwords do not match.";
        }

        if (request.getNewPassword().length() < 6) {

            return "Password must be at least 6 characters.";
        }

        String encodedPassword =
                passwordEncoder.encode(
                        request.getNewPassword()
                );

        user.setPassword(encodedPassword);

        userRepository.save(user);

        return "Password reset successfully!";
    }


    // ================= PASSWORD RESET REQUEST =================

    public static class PasswordResetRequest {

        private String email;

        private String newPassword;

        private String confirmPassword;


        public PasswordResetRequest() {
        }


        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }


        public String getNewPassword() {
            return newPassword;
        }

        public void setNewPassword(String newPassword) {
            this.newPassword = newPassword;
        }


        public String getConfirmPassword() {
            return confirmPassword;
        }

        public void setConfirmPassword(
                String confirmPassword) {

            this.confirmPassword = confirmPassword;
        }
    }
}