package commandline.nearrestapi.utils;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class Util {
    @Bean
    public RestTemplate RestTemplate(){
        return new RestTemplate();
    }
}
