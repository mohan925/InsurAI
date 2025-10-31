package com.example.insurAi.UserController;

import com.example.insurAi.entity.UserEntity;
import com.example.insurAi.UserRepo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

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
    public String login(@RequestBody UserEntity user) {
        Optional<UserEntity> existingUser = userRepository.findByUsernameOrEmail(user.getUsername(), user.getEmail());

//        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getEmail())) {
//            return "Login successful!";
//        }
         if(existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
        	 return "Login sucessful!";
         }
         return "Invalid username/email or password!";
//        return existingUser;
    }
}
