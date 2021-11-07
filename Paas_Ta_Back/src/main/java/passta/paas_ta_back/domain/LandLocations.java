package passta.paas_ta_back.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Getter
@Embeddable
@NoArgsConstructor
public class LandLocations {

    @Column(name = "land_leftTopCoordinateX")
    private int leftTopCoordinateX;
    @Column(name = "land_leftTopCoordinateY")
    private int leftTopCoordinateY;

    @Column(name = "land_rightTopCoordinateX")
    private int rightTopCoordinateX;
    @Column(name = "land_rightTopCoordinateY")
    private int rightTopCoordinateY;

    @Column(name = "land_leftBottomCoordinateX")
    private int leftBottomCoordinateX;
    @Column(name = "land_leftBottomCoordinateY")
    private int leftBottomCoordinateY;

    @Column(name = "land_rightBottomCoordinateX")
    private int rightBottomCoordinateX;
    @Column(name = "land_rightBottomCoordinateY")
    private int rightBottomCoordinateY;

    public LandLocations(int leftTopCoordinateX, int leftTopCoordinateY, int rightTopCoordinateX, int rightTopCoordinateY, int leftBottomCoordinateX, int leftBottomCoordinateY, int rightBottomCoordinateX, int rightBottomCoordinateY) {
        this.leftTopCoordinateX = leftTopCoordinateX;
        this.leftTopCoordinateY = leftTopCoordinateY;
        this.rightTopCoordinateX = rightTopCoordinateX;
        this.rightTopCoordinateY = rightTopCoordinateY;
        this.leftBottomCoordinateX = leftBottomCoordinateX;
        this.leftBottomCoordinateY = leftBottomCoordinateY;
        this.rightBottomCoordinateX = rightBottomCoordinateX;
        this.rightBottomCoordinateY = rightBottomCoordinateY;
    }

    @Override
    public String toString() {
        return "LandLocations{ " +
                "leftTop=(" + leftTopCoordinateX + ", " + leftTopCoordinateY + "), " +
                "rightTop=(" + rightTopCoordinateX + ", " + rightTopCoordinateY + "), " +
                "leftBottom=( " + leftBottomCoordinateX + ", " + leftBottomCoordinateY + "), " +
                "rightBottom=( " + rightBottomCoordinateX + ", " + rightBottomCoordinateY + ") }";
    }
}
