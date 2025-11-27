package com.klu.controller;

import com.klu.model.ContactMessage;
import com.klu.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @PostMapping("/submit")
    public ResponseEntity<String> submitContactMessage(@RequestBody ContactMessage contactMessage) {
        try {
            contactMessage.setSubmissionTime(LocalDateTime.now());
            contactMessageRepository.save(contactMessage);
            return new ResponseEntity<>("Message submitted successfully!", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to submit message: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
