package com.klu.controller;

import com.klu.model.Job;
import com.klu.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*")
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    // Add a job (by recruiter)
    @PostMapping
    public Job postJob(@RequestBody Job job) {
        return jobRepository.save(job);
    }

    // Get all jobs
    @GetMapping
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    // Get jobs by recruiter
    @GetMapping("/by")
    public List<Job> getJobsByRecruiter(@RequestParam String recruiter) {
        return jobRepository.findByPostedBy(recruiter);
    }
}