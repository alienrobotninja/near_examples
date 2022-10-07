package commandline.nearrestapi.services;

import commandline.nearrestapi.dtos.RPCObject;
import commandline.nearrestapi.exceptions.RestServerException;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public interface WrapperService {
    Map accounts(RPCObject rPCObject) throws RestServerException;

}
