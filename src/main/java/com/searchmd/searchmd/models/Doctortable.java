package com.searchmd.searchmd.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "doctortable")
public class Doctortable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "doctorid")
    int DoctorId;

    @Column(name = "userid")
    int UserId;

    @Column(name = "dfname")
    String DoctorFirstName;

    @Column(name = "dlname")
    String DoctorLastName;

    @Column(name = "specialty")
    String Speciality;

    @Column(name = "userrole")
    String UserRole = "d";

    @Column(name = "zipcode")
    int ZipCode;

    public int getZipCode() {
        return this.ZipCode;
    }

    public void setZipCode(int ZipCode) {
        this.ZipCode = ZipCode;
    }

    public int getDoctorId() {
        return this.DoctorId;
    }

    public void setDoctorId(int DoctorId) {
        this.DoctorId = DoctorId;
    }

    public int getUserId() {
        return this.UserId;
    }

    public void setUserId(int UserId) {
        this.UserId = UserId;
    }

    public String getDoctorFirstName() {
        return this.DoctorFirstName;
    }

    public void setDoctorFirstName(String DoctorFirstName) {
        this.DoctorFirstName = DoctorFirstName;
    }

    public String getDoctorLastName() {
        return this.DoctorLastName;
    }

    public void setDoctorLastName(String DoctorLastName) {
        this.DoctorLastName = DoctorLastName;
    }

    public String getSpeciality() {
        return this.Speciality;
    }

    public void setSpeciality(String Speciality) {
        this.Speciality = Speciality;
    }

    public String getUserRole() {
        return this.UserRole;
    }

    public void setUserRole(String UserRole) {
        this.UserRole = UserRole;
    }

}
