package passta.paas_ta_back.controller.land;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.domain.Land;
import passta.paas_ta_back.repository.land.LandRegisterDto;
import passta.paas_ta_back.repository.land.LandRepository;
import passta.paas_ta_back.service.LandService;

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
        return ResponseEntity.ok(landRepository.findAll().stream().map(LandInfoDto::new).collect(Collectors.toList()));
    }

    @PostMapping("/land")
    public ResponseEntity<?> createLand(@RequestBody LandRegisterDto landRegisterDto){
        Land land = landService.createLand(landRegisterDto);
        return ResponseEntity.ok(new LandInfoDto(land));
    }


}
