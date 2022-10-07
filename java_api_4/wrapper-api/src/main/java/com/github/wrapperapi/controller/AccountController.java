package com.github.wrapperapi.controller;

import com.github.wrapperapi.data.model.AccountParams;
import com.github.wrapperapi.data.model.Transaction;
import com.github.wrapperapi.service.RpcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/testnet")
public class AccountController {

    @Autowired
    RpcService rpcServiceImpl;

    @PostMapping("")
    public ResponseEntity<?> rpcWrapperApi(@RequestBody AccountParams accountRequest){
        return new ResponseEntity<>(rpcServiceImpl.viewAccount(accountRequest), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> viewAccountChanges(@RequestBody AccountParams accountRequest){
        return new ResponseEntity<>(rpcServiceImpl.viewAccount(accountRequest), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> sendTransaction(@RequestBody Transaction transaction){
        return  new ResponseEntity<>(rpcServiceImpl.sendTransaction(transaction), HttpStatus.OK);
    }

}
