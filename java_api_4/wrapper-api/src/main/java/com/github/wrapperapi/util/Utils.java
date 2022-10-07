package com.github.wrapperapi.util;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class Utils {
    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }
}
