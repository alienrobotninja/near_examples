package com.example.task.services;

import com.example.task.dto.AccessDto;
import com.example.task.dto.GasPriceDto;
import com.example.task.dto.RestServerDto;
import com.example.task.dto.RpcObjectDto;

import java.util.Map;

public interface WrapperService {

    Map viewAccess(AccessDto accessDto);
    Map viewGasPrice(GasPriceDto gasPriceDto);
    Map deployContract(RestServerDto restServerDto);
}
