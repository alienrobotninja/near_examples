package commandline.nearrestapi.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class RPCObject {
    private String jsonrpc;
    private String id;
    private String method;
}
