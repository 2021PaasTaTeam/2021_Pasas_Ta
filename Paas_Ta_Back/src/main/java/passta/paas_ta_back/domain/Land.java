package passta.paas_ta_back.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "land")
public class Land {

    @Id
    @GeneratedValue
    @Column(name = "land_id")
    private Long id;

    @OneToOne(mappedBy ="land", cascade = CascadeType.ALL)
    private Shop shop;

    @Embedded
    private LandLocations landLocations;

    @Column(name = "land_building")
    private String building;

    @Enumerated(EnumType.STRING)
    @Column(name = "land_seat")
    private Seat seat;

    public void setShopInLand(Shop shop){
        this.shop = shop;
        this.seat = Seat.YES;
    }

    public void setSeatNo(){
        this.shop = null;
        this.seat = Seat.NO;
    }

    public static Land createLand(String building, LandLocations landLocations){
        Land land = new Land();
        land.building = building;
        land.landLocations = landLocations;
        land.seat = Seat.NO;
        return land;
    }

    public Land updateLand(String building,LandLocations landLocations, String status){
        if (building != null){
            this.building = building;
        }
        if (landLocations != null){
            this.landLocations = landLocations;
        }
        if (status != null){
            if (status.equals(Seat.YES.toString())){
                this.seat = Seat.YES;
            }
            else if(status.equals(Seat.NO.toString())){
                this.seat = Seat.NO;
            }
        }
        return this;
    }
}
