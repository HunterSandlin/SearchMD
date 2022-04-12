package com.searchmd.searchmd;
import org.springframework.data.repository.CrudRepository;

import com.searchmd.searchmd.Patienttable;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete


public interface PatientRepository extends CrudRepository<Patienttable, Integer>{

}
