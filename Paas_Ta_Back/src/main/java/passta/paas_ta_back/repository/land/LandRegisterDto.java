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
    private int leftTopX;
    private int leftTopY;
    private int rightTopX;
    private int rightTopY;
    private int leftBottomX;
    private int leftBottomY;
    private int rightBottomX;
    private int rightBottomY;
}
