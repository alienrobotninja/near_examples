package com.example.task.dto;

import lombok.Data;

import java.util.Map;

@Data
public class AccessDto extends RpcObjectDto{

    private String jsonrpc;
    private String id;
    private String method;
    private Map<String, Object> params;

    public AccessDto(String jsonrpc, String id, String method,  Map<String, Object> params) {
        super(jsonrpc, id, method);
        this.params = params;
    }
}
