package com.searchmd.searchmd;
import org.springframework.data.repository.CrudRepository;

import com.searchmd.searchmd.Usertable;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete


public interface UserRepository extends CrudRepository<Usertable, Integer>{

}
