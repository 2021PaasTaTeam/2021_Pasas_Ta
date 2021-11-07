package passta.paas_ta_back.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.domain.Land;
import passta.paas_ta_back.domain.LandLocations;
import passta.paas_ta_back.repository.land.LandRegisterDto;
import passta.paas_ta_back.repository.land.LandRepository;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LandService {

    @Transactional
    public Land createLand(LandRegisterDto dto){
        LandLocations landLocations = new LandLocations(
                dto.getLeftTopX(),
                dto.getLeftTopY(),
                dto.getRightTopX(),
                dto.getRightTopY(),
                dto.getLeftBottomX(),
                dto.getLeftBottomY(),
                dto.getRightBottomX(),
                dto.getRightBottomY()
        );
        Land land = Land.createLand(dto.getBuilding(), landLocations);
        return land;
    }
}
