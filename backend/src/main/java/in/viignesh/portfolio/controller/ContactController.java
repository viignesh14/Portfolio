package in.viignesh.portfolio.controller;

import in.viignesh.portfolio.model.ContactMessage;
import in.viignesh.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Vite UI URL
public class ContactController {

    @Autowired
    private ContactRepository repository;

    @PostMapping("/contact")
    public ResponseEntity<String> submitContact(@RequestBody ContactMessage message) {
        repository.save(message);
        return ResponseEntity.ok("Message received successfully!");
    }
}
