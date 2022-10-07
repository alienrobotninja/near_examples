package com.github.nearproject.dto;


import lombok.Data;

import java.util.Map;

@Data
public class ViewAccountChangesPayload extends RpcObject{
    private Map<String, Object> params;

    public ViewAccountChangesPayload(String jsonrpc, String id, String method, Map<String, Object> params1) {
        super(jsonrpc, id, method);
        this.params = params1;
    }
}
