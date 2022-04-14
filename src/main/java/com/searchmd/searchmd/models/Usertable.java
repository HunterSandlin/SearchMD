package com.searchmd.searchmd.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Usertable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private  int userid;

    private String email;

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    //private int adminid;

    //private  int doctorid;

    private String password;

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    //private  int patientId;


    // public int getAdminid() {
    //     return adminid;
    // }

    // public void setAdminid(int adminid) {
    //     this.adminid = adminid;
    // }

    // public int getDoctorid() {
    //     return doctorid;
    // }

    // public void setDoctorid(int doctorid) {
    //     this.doctorid = doctorid;
    // }

    // public String getPassword() {
    //     return password;
    // }

    // public void setPassword(String password) {
    //     this.password = password;
    // }

    // public int getPatientId() {
    //     return patientId;
    // }

    // public void setPatientId(int patientId) {
    //     this.patientId = patientId;
    // }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }
}
