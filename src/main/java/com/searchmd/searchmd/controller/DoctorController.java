package com.searchmd.searchmd.controller;

import com.searchmd.searchmd.models.DoctorRepository;
import com.searchmd.searchmd.models.Doctortable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/doctors")
public class DoctorController {
    @Autowired
    DoctorRepository repository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Doctortable> getAllPatients() {
        // This returns a JSON or XML with the users
        //logger.log(Level.INFO,"In get all usermethod");
        return repository.findAll();
    }

    @GetMapping(path="/search")
    public @ResponseBody Iterable<Doctortable> searchByZip(@RequestParam int zip) {
        return repository.getDoctorsByZip(zip);
    }


}
