package com.example.task.services;

import com.example.task.dto.AccessDto;
import com.example.task.dto.GasPriceDto;
import com.example.task.dto.RpcObjectDto;
import com.example.task.exceptions.NearApiException;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Slf4j
class WrapperServiceImplTest {

    @Autowired
    WrapperServiceImpl wrapperService;
    @BeforeEach
    void setUp() {
    }

    @Test
    void viewAccessKeyTest() {
        AccessDto rpcObjectDto = new AccessDto("2.0", "dontcare",
                "query", Map.of("request_type", "view_access_key", "finality", "final"
        , "account_id", "client.chainlink.testnet", "public_key", "ed25519:H9k5eiU4xXS3M4z8HzKJSLaZdqGdGwBG49o7orNC4eZW"));
        Map response = wrapperService.viewAccess(rpcObjectDto);
        assertFalse(response.containsKey("error"));
    }
    @Test
    void viewAccessKeyListTest(){
        AccessDto rpcObjectDto = new AccessDto("2.0", "dontcare",
                "query", Map.of("request_type", "view_access_key_list", "finality", "final", "account_id", "example.testnet"));
        Map response = wrapperService.viewAccess(rpcObjectDto);
        assertFalse(response.containsKey("error"));
    }

    @Test
    void viewAccountTest(){
        AccessDto rpcObjectDto = new AccessDto("2.0", "dontcare", "query", Map.of("request_type", "view_account", "finality", "final",
                "account_id", "nearkat.testnet"));
        Map response = wrapperService.viewAccess(rpcObjectDto);
        assertFalse(response.containsKey("error"));
    }
    @Test
    void blockEndpointTest(){
        AccessDto rpcObjectDto = new AccessDto("2.0", "dontcare", "block", Map.of(  "finality", "final"));
        Map response = wrapperService.viewAccess(rpcObjectDto);
        assertFalse(response.containsKey("error"));
    }
    @Test
    void gasPriceEndpointTest(){
       Object[] params = {null};

        GasPriceDto rpcObjectDto = new GasPriceDto("2.0", "dontcare", "gas_price", params);
        try {
            Map response = wrapperService.viewGasPrice(rpcObjectDto);
            assertFalse(response.containsKey("error"));
        }catch (NearApiException e){
            log.info(e.getMessage());
        }

    }






}