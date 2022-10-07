package commandline.nearrestapi.services;

import commandline.nearrestapi.dtos.RPCObject;
import commandline.nearrestapi.exceptions.RestServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class WrapperServiceImpl implements WrapperService {
    @Autowired
    RestTemplate restTemplate;
    private final String baseUrl = "https://rpc.testnet.near.org";


    @Override
    public Map accounts(RPCObject rPCObject) throws RestServerException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<RPCObject> request = new HttpEntity<>(rPCObject,headers);
        Map res = restTemplate.postForObject(baseUrl, request, Map.class);
        assert res != null;
        if(res.containsKey("error")){
            Map error = (Map) res.get("error");
            Map cause = (Map) error.get("cause");
            String message = (String) cause.get("name");
            throw new RestServerException(message);
        }
        return res;
    }

}
