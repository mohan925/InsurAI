package com.example.insurAi.UserController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.insurAi.UserRepo.UserRepository;
import com.example.insurAi.entity.UserEntity;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("/{username}")
    public Optional<UserEntity> getUserByUsername(@PathVariable String username) {
        return userRepository.findByUsername(username);
    }

    @PostMapping("/signup")
    public String signup(@RequestBody UserEntity user) {
        Optional<UserEntity> existingEmail = userRepository.findByEmail(user.getEmail());
        Optional<UserEntity> existingUsername = userRepository.findByUsername(user.getUsername());

        if (existingEmail.isPresent()) {
            return "Email already exists!";
        }

        if (existingUsername.isPresent()) {
            return "Username already taken!";
        }

        userRepository.save(user);
        return "Signup successful!";
    }

    @PostMapping("/login")
    public Object login(@RequestBody UserEntity user) {
        Optional<UserEntity> existingUser = userRepository.findByUsernameOrEmail(user.getUsername(), user.getEmail());

        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
            return existingUser.get();
        }

        return "Invalid username/email or password!";
    }

    
    @PutMapping("/update/{username}")
    public String updateUser(@PathVariable String username, @RequestBody UserEntity updatedUser) {
        Optional<UserEntity> userOpt = userRepository.findByUsername(username);
        if (userOpt.isPresent()) {
            UserEntity user = userOpt.get();
            user.setEmail(updatedUser.getEmail());
            user.setPassword(updatedUser.getPassword());
            userRepository.save(user);
            return "Profile updated successfully!";
        } else {
            return "User not found!";
        }
    }
    @GetMapping("/agents")
    public List<UserEntity> getAgents(){
    	return userRepository.findByRole("Agent");
    }
}
