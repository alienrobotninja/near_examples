package com.github.wrapperapi.data.model;

import lombok.Data;
import java.util.ArrayList;

@Data
public class AccountParams extends  RPCEndpointRequest{
    private ArrayList<Params> params;
}
