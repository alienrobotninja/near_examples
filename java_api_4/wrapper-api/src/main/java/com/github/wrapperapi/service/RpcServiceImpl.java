package com.github.wrapperapi.service;

import com.github.wrapperapi.data.model.AccountParams;
import com.github.wrapperapi.data.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;

@Service
public class RpcServiceImpl implements RpcService {

    private final String testnet_url = "https://rpc.testnet.near.org";
    @Autowired
    private final RestTemplate restTemplate;

    @Autowired
    public RpcServiceImpl(RestTemplate restTemplate) {
        this.restTemplate= restTemplate;
    }

    @Override
    public HashMap viewAccount(AccountParams request) {
        HttpHeaders httpHeaders= new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<AccountParams> httpEntity=
                            new HttpEntity<>(request,httpHeaders);

//        passing in the url, entity and responseType
        return restTemplate.postForObject( testnet_url, httpEntity,HashMap.class);
    }

    @Override
    public Transaction sendTransaction(Transaction request) {
           HttpHeaders httpHeaders= new HttpHeaders();
           httpHeaders.setContentType(MediaType.APPLICATION_JSON);

           HttpEntity<Transaction> httpEntity=
                   new HttpEntity<>(request,httpHeaders);
        return restTemplate.postForObject(testnet_url, httpEntity,Transaction.class);
    }


}
