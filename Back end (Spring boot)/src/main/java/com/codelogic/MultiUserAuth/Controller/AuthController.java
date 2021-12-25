package com.codelogic.MultiUserAuth.Controller;

import com.codelogic.MultiUserAuth.Model.User;
import com.codelogic.MultiUserAuth.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User Register(@RequestBody User user) {

        return  authService.register(user);


    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {

        return authService.login(user);
    }

}
