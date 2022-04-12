package com.searchmd.searchmd.controller;

import com.searchmd.searchmd.models.Usertable;
import com.searchmd.searchmd.models.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.logging.Logger;

@Controller // This means that this class is a Controller
@RequestMapping(path="/user") // This means URL's start with /user (after Application path)
public class UserController {
    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private UserRepository userRepository;

    Logger logger = Logger.getLogger(UserController.class.getName());

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addNewUser (@RequestParam int userId
            , @RequestParam String password, @RequestParam int patientId, @RequestParam int doctorId, @RequestParam int adminId) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        Usertable n = new Usertable();
        n.setUserid(userId);
        n.setPassword(password);
        n.setAdminid(adminId);
        n.setDoctorid(doctorId);
        n.setPatientId(patientId);
        userRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Usertable> getAllUsers() {
        // This returns a JSON or XML with the users
        //logger.log(Level.INFO,"In get all usermethod");

        return userRepository.findAll();
    }
}




