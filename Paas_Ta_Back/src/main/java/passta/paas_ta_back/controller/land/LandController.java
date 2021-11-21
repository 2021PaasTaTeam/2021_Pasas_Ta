package passta.paas_ta_back.controller.land;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.controller.dto.DeleteCheckDto;
import passta.paas_ta_back.domain.Land;
import passta.paas_ta_back.repository.land.LandAndShopInfoDto;
import passta.paas_ta_back.repository.land.LandModifyDto;
import passta.paas_ta_back.repository.land.LandRegisterDto;
import passta.paas_ta_back.repository.land.LandRepository;
import passta.paas_ta_back.service.LandService;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class LandController {

    private final LandRepository landRepository;
    private final LandService landService;

    @GetMapping("/lands")
    public ResponseEntity<?> totalLandView(){
        List<LandAndShopInfoDto> allLandWithShop =
                landRepository.findAll().stream()
                        .map(LandAndShopInfoDto::new)
                        .sorted(Comparator.comparing(LandAndShopInfoDto::getLandId))
                        .collect(Collectors.toList());
        return ResponseEntity.ok(allLandWithShop);
    }

    @GetMapping("/land/{landId}")
    public ResponseEntity<?> landOneView(@PathVariable(name = "landId") Long landId){
        return ResponseEntity.ok(new LandInfoDto(landRepository.findById(landId).orElse(null)));
    }

    @PostMapping("/land")
    public ResponseEntity<?> createLand(@RequestBody LandRegisterDto landRegisterDto){
        Land land = landService.createLand(landRegisterDto);
        return new ResponseEntity<>(new LandInfoDto(land), HttpStatus.CREATED);
    }

    @PostMapping("/land/{landId}")
    public ResponseEntity<?> updateLand(@PathVariable(name = "landId") Long landId, @RequestBody LandModifyDto landModifyDto){
        Land modifyLand = landService.updateLand(landId, landModifyDto);
        return ResponseEntity.ok(new LandInfoDto(modifyLand));
    }

    @DeleteMapping("/land/{landId}")
    public ResponseEntity<?> deleteLand(@PathVariable(name = "landId") Long landId){
        boolean deleteCheck = landService.deleteLand(landId);
        return ResponseEntity.ok(new DeleteCheckDto(deleteCheck));
    }

}
