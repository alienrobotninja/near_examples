package com.github.nearproject.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RpcObject {
    private String jsonrpc;
    private String id;
    private String method;

}
