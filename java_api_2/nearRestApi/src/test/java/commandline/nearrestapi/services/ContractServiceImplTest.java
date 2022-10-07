//package commandline.nearrestapi.services;
//
//import commandline.nearrestapi.dtos.RPCObject;
//import commandline.nearrestapi.exceptions.RestServerException;
//import lombok.extern.slf4j.Slf4j;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import java.util.Map;
//
//@SpringBootTest
//@Slf4j
//class ContractServiceImplTest {
//    @Autowired
//    WrapperService wrapperService;
//
//    @BeforeEach
//    void setUp() {
//    }
//
//    @AfterEach
//    void tearDown() {
//    }
//
//    @Test
//    void testViewAccessKeys(){
//        Map<String, String> params = Map.of("request_type", "view_access_key",
//                "finality", "final",
//                "account_id", "client.chainlink.testnet",
//                "public_key","ed25519:H9k5eiU4xXS3M4z8HzKJSLaZdqGdGwBG49o7orNC4eZW");
//
//        RPCObject rPCObject = new RPCObject();
//        rPCObject.setId("dontcare");
//        rPCObject.setParams(params);
//        rPCObject.setJsonrpc("2.0");
//        rPCObject.setMethod("query");
//
//        Map response = null;
//        try {
//            response = wrapperService.accounts(rPCObject);
//        } catch (RestServerException e) {
//            log.info("error -> {}",e.getMessage());
//        }
//        log.info("response ->{}", response);
//    }
//
//    @Test
//    void testViewAccessKeysList(){
//        Map<String, String> params = Map.of("request_type","view_access_key_list",
//                "finality","final",
//                "account_id","example.testnet");
//        RPCObject rPCObject = new RPCObject();
//        rPCObject.setId("dontcare");
//        rPCObject.setParams(params);
//        rPCObject.setJsonrpc("2.0");
//        rPCObject.setMethod("query");
//
//        Map response = null;
//        try {
//            response = wrapperService.accounts(rPCObject);
//        } catch (RestServerException e) {
//            log.info("error -> {}",e.getMessage());
//        }
//        log.info("response ->{}", response);
//    }
//
////    @Test
////    void testViewSingleAccessKeyChange(){
////        Map params = Map.of("changes_type", "single_access_key_changes",
////                "keys", {"account_id", "example-acct.testnet",
////                        "public_key","ed25519:25KEc7t7MQohAJ4EDThd2vkksKkwangnuJFzcoiXj9oM")},
////        "finality","final");
////        ViewAccessKeyRequest viewAccessKeyRequest = new ViewAccessKeyRequest();
////        viewAccessKeyRequest.setId("dontcare");
////        viewAccessKeyRequest.setParams(params);
////        viewAccessKeyRequest.setJsonrpc("2.0");
////        viewAccessKeyRequest.setMethod("EXPERIMENTAL_changes");
////
////        Map response = null;
////        try {
////            response = contractService.viewSingleAccessKeyChange(viewAccessKeyRequest);
////        } catch (RestServerException e) {
////            log.info("error -> {}",e.getMessage());
////        }
////        log.info("response ->{}", response);
////    }
//
////    @Test
////    void testViewAllAccessKeyChanges(){
////        String account_id = "example-acct.testnet";
////
////        MapParams params = new MapParams();
////        params.setChanges_type("all_access_key_changes");
////        params.setAccount_ids(List.of(account_id));
////        params.setBlock_id("4kvqE1PsA6ic1LG7S5SqymSEhvjqGqumKjAxnVdNN3ZH");
////
////        ViewAccessKeyRequest viewAccessKeyRequest = new ViewAccessKeyRequest();
////        viewAccessKeyRequest.setId("dontcare");
////        viewAccessKeyRequest.setParams(params);
////        viewAccessKeyRequest.setJsonrpc("2.0");
////        viewAccessKeyRequest.setMethod("EXPERIMENTAL_changes");
////
////        Map response = null;
////        try {
////            response = contractService.viewAllAccessKeyChange(viewAccessKeyRequest);
////        } catch (RestServerException e) {
////            log.info("error -> {}",e.getMessage());
////        }
////        log.info("response ->{}", response);
////    }
////
////    @Test
////    void testViewAccount(){
////        MapParams params = new MapParams();
////        params.setRequest_type("view_account");
////        params.setFinality("final");
////        params.setAccount_id("nearkat.testnet");
////
////        ViewAccessKeyRequest viewAccessKeyRequest = new ViewAccessKeyRequest();
////        viewAccessKeyRequest.setId("dontcare");
////        viewAccessKeyRequest.setParams(params);
////        viewAccessKeyRequest.setJsonrpc("2.0");
////        viewAccessKeyRequest.setMethod("query");
////
////        Map response = null;
////        try {
////            response = contractService.viewAccount(viewAccessKeyRequest);
////        } catch (RestServerException e) {
////            log.info("error -> {}",e.getMessage());
////        }
////        log.info("response ->{}", response);
////    }
//
//}