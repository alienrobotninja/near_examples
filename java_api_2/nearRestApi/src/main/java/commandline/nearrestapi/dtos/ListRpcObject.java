package commandline.nearrestapi.dtos;

import lombok.Data;

import java.util.List;

@Data
public class ListRpcObject extends RPCObject{
    private List params;
}
