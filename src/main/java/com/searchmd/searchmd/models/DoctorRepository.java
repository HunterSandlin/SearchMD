package com.searchmd.searchmd.models;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DoctorRepository extends JpaRepository<Doctortable, Integer>  {
    @Query(value = "select * from doctortable where zipcode = ?1", nativeQuery=true)
    List<Doctortable> getDoctorsByZip(Integer zipcode);
}
