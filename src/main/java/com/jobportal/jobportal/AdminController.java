package com.jobportal.jobportal;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminRepository adminRepository;
    private final UserRepository userRepository;
    private final ApplicationRepository applicationRepository;
    private final JobRepository jobRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AdminController(
            AdminRepository adminRepository,
            UserRepository userRepository,
            ApplicationRepository applicationRepository,
            JobRepository jobRepository) {

        this.adminRepository = adminRepository;
        this.userRepository = userRepository;
        this.applicationRepository = applicationRepository;
        this.jobRepository = jobRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @PostMapping("/login")
    public Object loginAdmin(@RequestBody Admin loginAdmin) {

        Admin admin =
                adminRepository.findByEmail(loginAdmin.getEmail());

        if (admin == null) {
            return "Invalid email or password.";
        }

        String enteredPassword = loginAdmin.getPassword();
        String storedPassword = admin.getPassword();

        if (passwordEncoder.matches(enteredPassword, storedPassword)) {
            return admin;
        }

        // Upgrade old plain-text password to BCrypt
        if (enteredPassword.equals(storedPassword)) {

            admin.setPassword(
                    passwordEncoder.encode(enteredPassword)
            );

            adminRepository.save(admin);

            return admin;
        }

        return "Invalid email or password.";
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/applications")
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    @GetMapping("/dashboard")
    public String getDashboard() {

        long totalUsers = userRepository.count();
        long totalJobs = jobRepository.count();
        long totalApplications = applicationRepository.count();

        return "Total Users: " + totalUsers
                + ", Total Jobs: " + totalJobs
                + ", Total Applications: " + totalApplications;
    }
}