package com.infiniq.ams.standalone;

import org.apache.commons.lang3.StringUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@EnableAspectJAutoProxy
@SpringBootApplication
@ComponentScan(basePackages = { "com.infiniq" })
public class StandaloneApplication {

    public static void main(String[] args) {
        String profile = StringUtils.defaultString(System.getProperty("spring.profiles.active"), "local");
        System.setProperty("spring.profiles.active", profile);

        SpringApplication.run(StandaloneApplication.class, args);
    }

}
