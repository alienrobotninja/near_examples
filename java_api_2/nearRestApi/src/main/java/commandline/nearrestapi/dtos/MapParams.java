package commandline.nearrestapi.dtos;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class MapParams extends HashMap {
    private Map params;
}
