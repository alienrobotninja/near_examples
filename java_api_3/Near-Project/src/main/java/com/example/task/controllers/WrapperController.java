package com.example.task.controllers;

import com.example.task.dto.AccessDto;
import com.example.task.dto.GasPriceDto;
import com.example.task.services.WrapperService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/")
public class WrapperController {

    @Autowired
    private WrapperService wrapperService;

    @PostMapping("/view_access")
    public Map viewAccess(@RequestBody AccessDto accessDto){
        return wrapperService.viewAccess(accessDto);
    }

    @PostMapping("/vew_gas_price")
    public Map viewGasPrice(@RequestBody GasPriceDto gasPriceDto){
        return wrapperService.viewGasPrice(gasPriceDto);
    }

}
