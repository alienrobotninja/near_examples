package com.example.task.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor@NoArgsConstructor
public class RestServerDto {
    private String account_id;
    private String seed_phrase;
    private String contract;

}
