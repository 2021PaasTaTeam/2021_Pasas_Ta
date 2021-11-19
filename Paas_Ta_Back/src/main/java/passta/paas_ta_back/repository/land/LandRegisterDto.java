package passta.paas_ta_back.repository.land;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LandRegisterDto {
    private String building;
    private Integer leftTopX;
    private Integer leftTopY;
    private Integer rightTopX;
    private Integer rightTopY;
    private Integer leftBottomX;
    private Integer leftBottomY;
    private Integer rightBottomX;
    private Integer rightBottomY;
}
