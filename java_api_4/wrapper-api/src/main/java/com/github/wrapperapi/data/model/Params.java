package com.github.wrapperapi.data.model;


import lombok.Data;

@Data
public class Params {
    private String request_type;
    private String finality;
    private String account_id;
}
