package com.klu.service;

import com.klu.model.JobSeeker;
import com.klu.repository.JobSeekerRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class JobSeekerService {

    private final JobSeekerRepository jobSeekerRepository;

    public JobSeekerService(JobSeekerRepository jobSeekerRepository) {
        this.jobSeekerRepository = jobSeekerRepository;
    }

    public JobSeeker updateJobSeeker(String email, JobSeeker updatedJobSeeker) {
        Optional<JobSeeker> optionalJobSeeker = jobSeekerRepository.findByEmail(email);
        if (optionalJobSeeker.isPresent()) {
            JobSeeker js = optionalJobSeeker.get();
            js.setFullName(updatedJobSeeker.getFullName());
            js.setPassword(updatedJobSeeker.getPassword());
            return jobSeekerRepository.save(js);
        }
        return null;
    }

    public Optional<JobSeeker> getJobSeekerByEmail(String email) {
        return jobSeekerRepository.findByEmail(email);
    }
}
