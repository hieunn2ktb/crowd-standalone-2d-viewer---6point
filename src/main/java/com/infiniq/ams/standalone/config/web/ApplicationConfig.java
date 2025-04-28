package com.infiniq.ams.standalone.config.web;

import org.apache.catalina.connector.Connector;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.servlet.server.ServletWebServerFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.io.Resource;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

@Configuration
public class ApplicationConfig {
    @Value("classpath:/message/message*")
    private Resource[] messageFiles;

    @Value("${server.http.port:8080}")
    private int httpPort;

    @Bean
    MessageSource messageSource() {
        Set<String> _messageSet = new TreeSet<>();
        if (messageFiles != null) {
            for (Resource _messageResource : messageFiles) {
                String _messageFileName = _messageResource.getFilename();
                _messageFileName = _messageFileName.substring(0, (_messageFileName.length() - 14));
                _messageSet.add(_messageFileName);
            }
        }

        List<String> messageFileList = new ArrayList<>();
        for (String messageFile : _messageSet) {
            messageFileList.add("classpath:/message/" + messageFile.trim());
        }

        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasenames(messageFileList.stream().toArray(String[]::new));
        messageSource.setDefaultEncoding("UTF-8");
        messageSource.setCacheSeconds(10);
        messageSource.setUseCodeAsDefaultMessage(true);

        return messageSource;
    }

//    @Bean
//    @Profile("local")
//    ServletWebServerFactory servletContainer() {
//        TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
//        tomcat.addAdditionalTomcatConnectors(createHttpConnector());
//        return tomcat;
//    }
//
//    private Connector createHttpConnector() {
//        Connector httpConnector = new Connector("org.apache.coyote.http11.Http11NioProtocol");
//        httpConnector.setPort(httpPort);
//        return httpConnector;
//    }
}