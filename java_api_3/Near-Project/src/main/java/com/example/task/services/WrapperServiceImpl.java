package com.example.task.services;

import com.example.task.dto.AccessDto;
import com.example.task.dto.GasPriceDto;
import com.example.task.dto.RestServerDto;
import com.example.task.dto.RpcObjectDto;
import com.example.task.exceptions.NearApiException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;
import java.util.Objects;

@Slf4j
@Service
public class WrapperServiceImpl implements WrapperService{

    @Autowired
    RestTemplate restTemplate;

    private final String baseUrl = "https://rpc.testnet.near.org";

    private Map connectToRpcEndpoint(RpcObjectDto rpcObjectDto) {
        HttpHeaders httpHeaders = new HttpHeaders();
        MediaType mediaType = MediaType.APPLICATION_JSON;
        httpHeaders.setContentType(mediaType);
        HttpEntity<RpcObjectDto> requestBody = new HttpEntity<>(rpcObjectDto, httpHeaders);
        Map response = restTemplate.postForObject(baseUrl, requestBody, Map.class);
        log.info(String.valueOf(response));
        assert response != null;

        if(response.containsKey("error")){
            Map error = (Map) response.get("error");
            Map cause = (Map) error.get("cause");
            String errorName = (String) error.get("name");

            if(errorName.equals("REQUEST_VALIDATION_ERROR")){
                throw new NearApiException("Error " + cause.get("name"));
            }else if(errorName.equals("HANDLER_ERROR")){
                throw new NearApiException("Error: " + cause.get("name"));
            }else if (errorName.equals("INTERNAL_ERROR")){
                throw new NearApiException("Error: " + cause.get("name"));
            }
        }
        return response;
    }

    @Override
    public Map viewAccess(AccessDto accessDto) {
        return connectToRpcEndpoint(accessDto);
    }

    @Override
    public Map viewGasPrice(GasPriceDto gasPriceDto) {
        return connectToRpcEndpoint(gasPriceDto);
    }

    @Override
    public Map deployContract(RestServerDto restServerDto) {
        return null;
    }
}
