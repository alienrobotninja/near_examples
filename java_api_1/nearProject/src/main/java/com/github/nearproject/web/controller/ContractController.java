package com.github.nearproject.web.controller;

import com.github.nearproject.dto.RpcObject;
import com.github.nearproject.dto.ViewAccountChangesPayload;
import com.github.nearproject.dto.ViewAccountPayload;
import com.github.nearproject.exception.NearServerException;
import com.github.nearproject.service.rpc.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/v1/near")
public class ContractController {


    @Autowired
    ContractService contractService;

    @PostMapping("/view-account")
    public ResponseEntity<?> viewAccount(@RequestBody ViewAccountPayload rpcObject){
        try{
            return new ResponseEntity<>(contractService.viewAccount(rpcObject), HttpStatus.OK);
        }catch(NearServerException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/view-account-changes")
    public ResponseEntity<?> viewAccountChanges(@RequestBody ViewAccountChangesPayload rpcObject){
        try{
            return new ResponseEntity<>(contractService.viewAccountChanges(rpcObject), HttpStatus.OK);
        }catch(NearServerException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
