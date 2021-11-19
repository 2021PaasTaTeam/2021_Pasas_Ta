package passta.paas_ta_back.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.domain.Land;
import passta.paas_ta_back.domain.LandLocations;
import passta.paas_ta_back.domain.Seat;
import passta.paas_ta_back.repository.land.LandModifyDto;
import passta.paas_ta_back.repository.land.LandRegisterDto;
import passta.paas_ta_back.repository.land.LandRepository;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LandService{

    private final LandRepository landRepository;

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
        landRepository.save(land);
        return land;
    }

    @Transactional
    public boolean deleteLand(Long landId){
        Land land = landRepository.findById(landId).get();
        if (land == null){
            return false;
        }
        landRepository.delete(land);
        return true;
    }

    @Transactional
    public Land updateLand(Long landId, LandModifyDto landModifyDto){
        Land land = landRepository.findById(landId).orElse(null);
        if (land == null){
            return null;
        }

        LandLocations modifyLandLocations = land.getLandLocations().updateLocation(
                landModifyDto.getLeftTopX(),
                landModifyDto.getLeftTopY(),
                landModifyDto.getRightTopX(),
                landModifyDto.getRightTopY(),
                landModifyDto.getLeftBottomX(),
                landModifyDto.getLeftBottomY(),
                landModifyDto.getRightBottomX(),
                landModifyDto.getRightBottomY()
        );
        Land modifyLand = land.updateLand(landModifyDto.getBuilding(), modifyLandLocations, landModifyDto.getStatus());
        return modifyLand;
    }
}
