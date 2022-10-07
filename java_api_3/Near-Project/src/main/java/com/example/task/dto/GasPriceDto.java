package com.example.task.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Data
public class GasPriceDto extends RpcObjectDto{
    private String jsonrpc;
    private String id;
    private String method;
    private Object[] params;

    public GasPriceDto(String jsonrpc, String id, String method, Object[] params) {
        super(jsonrpc, id, method);
        this.params = params;
    }
}
