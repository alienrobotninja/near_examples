package com.github.wrapperapi.data.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class RPCEndpointRequest {
    private String jsonrpc;
    private String id;
    private String method;
}
