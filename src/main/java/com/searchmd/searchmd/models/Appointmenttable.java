package com.searchmd.searchmd.models;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Appointmenttable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer appid;
    private Integer patientid;
    private Integer doctorid;
    private LocalDateTime appdate;

    public Integer getAppid() {
        return this.appid;
    }

    public void setAppid(Integer appid) {
        this.appid = appid;
    }

    public Integer getPatientid() {
        return this.patientid;
    }

    public void setPatientid(Integer patientid) {
        this.patientid = patientid;
    }

    public Integer getDoctorid() {
        return this.doctorid;
    }

    public void setDoctorid(Integer doctorid) {
        this.doctorid = doctorid;
    }

    public LocalDateTime getAppdate() {
        return this.appdate;
    }

    public void setAppdate(LocalDateTime appdate) {
        this.appdate = appdate;
    }
    
}
