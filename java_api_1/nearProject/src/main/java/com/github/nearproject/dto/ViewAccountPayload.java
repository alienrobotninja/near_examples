package com.github.nearproject.dto;

import lombok.Data;

import java.util.Map;


@Data
public class ViewAccountPayload extends RpcObject{
    private Map<String, String> params;

    public ViewAccountPayload(String jsonrpc, String id, String method, Map<String, String> params) {
        super(jsonrpc, id, method);
        this.params = params;
    }
}
