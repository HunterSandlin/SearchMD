package com.searchmd.searchmd.models;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AppointmenttableRepository extends JpaRepository<Appointmenttable, Integer> {
    @Query(value = "select * from appointmenttable a where a.doctorid = ?1", nativeQuery = true)
    List<Appointmenttable> getAppointmentsByDocId(Integer docId);

    @Query(value = "select * from appointmenttable a where a.patientid = ?1", nativeQuery = true)
    List<Appointmenttable> getAppointmentsByPatientId(Integer patientId);

    @Query(value = "select * from appointmenttable a where a.appdate like ?1%", nativeQuery = true)
    List<Appointmenttable> getAppointmentsByDate(String date);
}


