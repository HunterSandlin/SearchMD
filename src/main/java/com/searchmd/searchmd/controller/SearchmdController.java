package com.searchmd.searchmd.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.searchmd.searchmd.controller.UserController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class SearchmdController {
    @Autowired
    @GetMapping("/")
    public String getAllBooks() {
        return "Hello World";
    }



}

