package commandline.nearrestapi.dtos;

import lombok.Data;

import java.util.Map;
@Data
public class MapRpcObject extends RPCObject {
    private Map params;
}
