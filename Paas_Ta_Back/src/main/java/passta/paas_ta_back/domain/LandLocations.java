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
    private Integer leftTopCoordinateX;
    @Column(name = "land_leftTopCoordinateY")
    private Integer leftTopCoordinateY;

    @Column(name = "land_rightTopCoordinateX")
    private Integer rightTopCoordinateX;
    @Column(name = "land_rightTopCoordinateY")
    private Integer rightTopCoordinateY;

    @Column(name = "land_leftBottomCoordinateX")
    private Integer leftBottomCoordinateX;
    @Column(name = "land_leftBottomCoordinateY")
    private Integer leftBottomCoordinateY;

    @Column(name = "land_rightBottomCoordinateX")
    private Integer rightBottomCoordinateX;
    @Column(name = "land_rightBottomCoordinateY")
    private Integer rightBottomCoordinateY;

    public LandLocations(Integer leftTopCoordinateX,
                         Integer leftTopCoordinateY,
                         Integer rightTopCoordinateX,
                         Integer rightTopCoordinateY,
                         Integer leftBottomCoordinateX,
                         Integer leftBottomCoordinateY,
                         Integer rightBottomCoordinateX,
                         Integer rightBottomCoordinateY) {
        this.leftTopCoordinateX = leftTopCoordinateX;
        this.leftTopCoordinateY = leftTopCoordinateY;
        this.rightTopCoordinateX = rightTopCoordinateX;
        this.rightTopCoordinateY = rightTopCoordinateY;
        this.leftBottomCoordinateX = leftBottomCoordinateX;
        this.leftBottomCoordinateY = leftBottomCoordinateY;
        this.rightBottomCoordinateX = rightBottomCoordinateX;
        this.rightBottomCoordinateY = rightBottomCoordinateY;
    }

    public LandLocations updateLocation(Integer leftTopCoordinateX,
                                        Integer leftTopCoordinateY,
                                        Integer rightTopCoordinateX,
                                        Integer rightTopCoordinateY,
                                        Integer leftBottomCoordinateX,
                                        Integer leftBottomCoordinateY,
                                        Integer rightBottomCoordinateX,
                                        Integer rightBottomCoordinateY){
        if (leftTopCoordinateX != null) {
            this.leftTopCoordinateX = leftTopCoordinateX;
        }
        if (leftTopCoordinateY != null) {
            this.leftTopCoordinateY = leftTopCoordinateY;
        }
        if (rightTopCoordinateX != null) {
            this.rightTopCoordinateX = rightTopCoordinateX;
        }
        if (rightTopCoordinateY != null) {
            this.rightTopCoordinateY = rightTopCoordinateY;
        }
        if (leftBottomCoordinateX != null) {
            this.leftBottomCoordinateX = leftBottomCoordinateX;
        }
        if (leftBottomCoordinateX != null) {
            this.leftBottomCoordinateY = leftBottomCoordinateY;
        }
        if (leftBottomCoordinateX != null) {
            this.rightBottomCoordinateX = rightBottomCoordinateX;
        }
        if (leftBottomCoordinateX != null) {
            this.rightBottomCoordinateY = rightBottomCoordinateY;
        }
        return this;
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
