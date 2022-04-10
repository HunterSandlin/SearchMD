package com.searchmd.searchmd;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@Configuration
public class DatabaseConfig {
    @Bean
    public DataSource dataSource(){
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.searchmd.searchmd.SearchmdApplication");
        dataSource.setUrl("jdbc:mysql://localhost:3306/searchmd");
        dataSource.setUsername( "root" );
        dataSource.setPassword( "Mariann123" );
        return dataSource;
    }
}
