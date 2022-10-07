package com.github.wrapperapi.data.model;

import lombok.Data;
import java.util.ArrayList;

@Data
public class Transaction extends RPCEndpointRequest {
    private ArrayList<String> params;
}
