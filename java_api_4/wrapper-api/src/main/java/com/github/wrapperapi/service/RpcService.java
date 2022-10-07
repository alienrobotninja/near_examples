package com.github.wrapperapi.service;

import com.github.wrapperapi.data.model.AccountParams;
import com.github.wrapperapi.data.model.RPCEndpointRequest;
import com.github.wrapperapi.data.model.Transaction;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public interface RpcService {
    HashMap viewAccount(AccountParams request);
    Transaction sendTransaction(Transaction transaction);
}
