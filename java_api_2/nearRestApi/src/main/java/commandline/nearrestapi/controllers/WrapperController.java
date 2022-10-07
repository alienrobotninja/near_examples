package commandline.nearrestapi.controllers;

import commandline.nearrestapi.dtos.ListRpcObject;
import commandline.nearrestapi.dtos.MapParams;
import commandline.nearrestapi.dtos.MapRpcObject;
import commandline.nearrestapi.dtos.RPCObject;
import commandline.nearrestapi.exceptions.RestServerException;
import commandline.nearrestapi.services.WrapperService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/")
public class WrapperController {
    @Autowired
    WrapperService wrapperService;

    @PostMapping("/accounts_query")
    public ResponseEntity<?> accounts(@RequestBody MapParams mapParams){
        MapRpcObject rPCObject = new MapRpcObject();
        rPCObject.setParams(mapParams);
        rPCObject.setMethod("query");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/accounts_EXPERIMENTAL_changes")
    public ResponseEntity<?> accountsExperimental(@RequestBody MapParams mapParams){
        MapRpcObject rPCObject = new MapRpcObject();
        rPCObject.setParams(mapParams);
        rPCObject.setMethod("EXPERIMENTAL_changes");
        return getResponseEntity(rPCObject);
    }
    @PostMapping("/block_EXPERIMENTAL_changes")
    public ResponseEntity<?> blockExperimental(@RequestBody MapParams mapParams){
        MapRpcObject rPCObject = new MapRpcObject();
        rPCObject.setParams(mapParams);
        rPCObject.setMethod("EXPERIMENTAL_changes_in_block");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/block")
    public ResponseEntity<?> block(@RequestBody MapParams mapParams){
        MapRpcObject rPCObject = new MapRpcObject();
        rPCObject.setParams(mapParams);
        rPCObject.setMethod("block");
        return getResponseEntity(rPCObject);
    }
    @PostMapping("/chunk")
    public ResponseEntity<?> chunk(@RequestBody MapParams mapParams){
        MapRpcObject rPCObject = new MapRpcObject();
        rPCObject.setParams(mapParams);
        rPCObject.setMethod("chunk");
        return getResponseEntity(rPCObject);
    }
    @PostMapping("/gas")
    public ResponseEntity<?> gas(@RequestBody MapParams mapParams){
        MapRpcObject rPCObject = new MapRpcObject();
        rPCObject.setParams(mapParams);
        rPCObject.setMethod("gas_price");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/EXPERIMENTAL_genesis_config")
    public ResponseEntity<?> EXPERIMENTAL_genesis_config(){
        RPCObject rPCObject = new RPCObject();
        rPCObject.setMethod("EXPERIMENTAL_genesis_config");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/EXPERIMENTAL_protocol_config")
    public ResponseEntity<?> EXPERIMENTAL_protocol_config(@RequestBody MapParams mapParams){
        MapRpcObject rPCObject = new MapRpcObject();
        rPCObject.setMethod("EXPERIMENTAL_protocol_config");
        rPCObject.setParams(mapParams);
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/network_status")
    public ResponseEntity<?> network_status(@RequestBody MapParams mapParams){
        MapRpcObject rPCObject = new MapRpcObject();
        rPCObject.setParams(mapParams);
        rPCObject.setMethod("status");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/network_info")
    public ResponseEntity<?> network_info(@RequestBody MapParams mapParams){
        MapRpcObject rPCObject = new MapRpcObject();
        rPCObject.setParams(mapParams);
        rPCObject.setMethod("network_info");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/validators")
    public ResponseEntity<?> validators(@RequestBody ListRpcObject rPCObject){
        rPCObject.setMethod("validators");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/transaction_send")
    public ResponseEntity<?> transaction_send(@RequestBody ListRpcObject rPCObject){
        rPCObject.setMethod("broadcast_tx_async");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/transaction_send/await")
    public ResponseEntity<?> transaction_send_await(@RequestBody ListRpcObject rPCObject){
        rPCObject.setMethod("broadcast_tx_commit");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/transaction_status")
    public ResponseEntity<?> transaction_status(@RequestBody ListRpcObject rPCObject){
        rPCObject.setMethod("tx");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/transaction_status/receipt")
    public ResponseEntity<?> transaction_status_reciept(@RequestBody ListRpcObject rPCObject){
        rPCObject.setMethod("EXPERIMENTAL_tx_status");
        return getResponseEntity(rPCObject);
    }

    @PostMapping("/transaction_status/receipt_id")
    public ResponseEntity<?> transaction_status_receipt_id(@RequestBody MapRpcObject rPCObject){
        rPCObject.setMethod("EXPERIMENTAL_receipt");
        return getResponseEntity(rPCObject);
    }

    private ResponseEntity<?> getResponseEntity(RPCObject rPCObject) {
        rPCObject.setJsonrpc("2.0");
        rPCObject.setId("dontcare");

        Map res;
        try {
            res = wrapperService.accounts(rPCObject);
        } catch (RestServerException e) {
            log.info("response error: -> {}",e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(res,HttpStatus.OK);
    }

}
