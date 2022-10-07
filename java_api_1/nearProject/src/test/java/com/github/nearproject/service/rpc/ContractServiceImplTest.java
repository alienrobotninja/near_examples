package com.github.nearproject.service.rpc;

import com.github.nearproject.dto.RpcObject;
import com.github.nearproject.dto.ViewAccountChangesPayload;
import com.github.nearproject.dto.ViewAccountPayload;
import com.github.nearproject.exception.NearServerException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ContractServiceImplTest {

    @Autowired
    ContractServiceImpl contractService;

    @Test
    public void testThatExceptionIsThrownIfAccountIdIsWrong(){
        Map<String, String> params = Map.of( "request_type","view_account",
                "finality", "final",
                "account_id", "nearkar.testnet");

        ViewAccountPayload rpcObject = new ViewAccountPayload("2.0", "dontcare", "query", params);
        assertThrows(NearServerException.class, ()->contractService.viewAccount(rpcObject));
    }


    @Test
    void testThatAccountCanBeViewed(){
        Map<String, String> params = Map.of( "request_type","view_account",
                "finality", "final",
                "account_id", "nearkat.testnet");

        ViewAccountPayload rpcObject = new ViewAccountPayload("2.0", "dontcare", "query", params);

        Map response = contractService.viewAccount(rpcObject);

        assertFalse(response.containsKey("error"));
    }
//
//
//    @Test
//    void testThatAccountChangesCanBeViewed(){
//        Map<String, Object> params = Map.of( "changes_type", "account_changes",
//                "account_ids", List.of("mycontract.leonardra.testnet"),
//                "block_id", 88504828);
//
//        ViewAccountChangesPayload rpcObject = new ViewAccountChangesPayload("2.0", "dontcare", "EXPERIMENTAL_changes", params);
//
//        Map response = contractService.viewAccountChanges(rpcObject);
//
//        assertFalse(response.containsKey("error"));
//    }
}