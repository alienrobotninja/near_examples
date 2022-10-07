package com.github.nearproject.service.rpc;

import com.github.nearproject.dto.RpcObject;
import com.github.nearproject.dto.ViewAccountChangesPayload;
import com.github.nearproject.dto.ViewAccountPayload;
import com.github.nearproject.exception.HandlerException;
import com.github.nearproject.exception.NearServerException;
import com.github.nearproject.exception.NodeException;
import com.github.nearproject.exception.RequestValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;


@Service
public class ContractServiceImpl implements ContractService{

    @Autowired
    RestTemplate restTemplate;

    private final String baseUrl = "https://rpc.testnet.near.org";

    @Override
    public Map viewAccount(ViewAccountPayload rpcObject) {
        return callRpcEndPoint(rpcObject);
    }

    @Override
    public Map viewAccountChanges(ViewAccountChangesPayload rpcObject){
        return callRpcEndPoint(rpcObject);
    }

    private Map callRpcEndPoint(RpcObject rpcObject){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<RpcObject> request = new HttpEntity<>(rpcObject, headers);
        Map res = restTemplate.postForObject(baseUrl, request, Map.class);
        assert res != null;
        if(res.containsKey("error")){
            Map errorBody = (Map) res.get("error");

            String errorType = (String) errorBody.get("name");
            Map errorCause = (Map)errorBody.get("cause");
            switch(errorType){
                case "REQUEST_VALIDATION_ERROR" -> throw new RequestValidationException("Request validation error ->"+ errorCause.get("name"));
                case "HANDLER_ERROR" -> throw new HandlerException("Handler Error ->"+ errorCause.get("name"));
                case "INTERNAL_ERROR" -> throw new NodeException("Internal Error ->"+ errorCause.get("name"));
            }
        }
        return res;
    }


}
