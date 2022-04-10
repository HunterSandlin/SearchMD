package com.searchmd.searchmd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.Query;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.util.List;

@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
@SpringBootApplication
public class SearchmdApplication implements CommandLineRunner {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	DatabaseConfig databaseConfig = new DatabaseConfig();

	public static void main(String[] args) {
		SpringApplication.run(SearchmdApplication.class, args);




	}

	@Override
	public void run(String... args) throws Exception {

		String sql = "INSERT INTO patientTable(patientId , plName , pfName, dob, insuranceId) values (?,?,?,?,?)";

		int result = jdbcTemplate.update(sql, "90","Taylor","Ellis","2019-06-19","0898797");
		if(result>0){
			System.out.println("A new row has been inserted.");
		}

	}
}


