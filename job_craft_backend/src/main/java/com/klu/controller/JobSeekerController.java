package com.klu.controller;

import com.klu.model.JobSeeker;
import com.klu.service.JobSeekerService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/jobseekers")
public class JobSeekerController {

    private final JobSeekerService jobSeekerService;

    public JobSeekerController(JobSeekerService jobSeekerService) {
        this.jobSeekerService = jobSeekerService;
    }

    @GetMapping("/{email}")
    public JobSeeker getJobSeeker(@PathVariable String email) {
        return jobSeekerService.getJobSeekerByEmail(email).orElse(null);
    }

    @PutMapping("/{email}")
    public String updateJobSeeker(@PathVariable String email, @RequestBody JobSeeker jobSeeker) {
        JobSeeker updatedJobSeeker = jobSeekerService.updateJobSeeker(email, jobSeeker);
        if (updatedJobSeeker != null) {
            return "Account settings updated successfully!";
        }
        return "Job seeker not found!";
    }
}
