package com.github.nearproject.service.rpc;

import com.github.nearproject.dto.RpcObject;
import com.github.nearproject.dto.ViewAccountChangesPayload;
import com.github.nearproject.dto.ViewAccountPayload;

import java.util.Map;


public interface ContractService {
    Map viewAccount(ViewAccountPayload rpcObject);
    Map viewAccountChanges(ViewAccountChangesPayload rpcObject);
}
