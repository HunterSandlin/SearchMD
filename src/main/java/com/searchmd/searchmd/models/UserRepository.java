package com.searchmd.searchmd.models;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import com.searchmd.searchmd.models.Usertable;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete


public interface UserRepository extends CrudRepository<Usertable, Integer>{
    List<Usertable> findByEmail(String email);

}
