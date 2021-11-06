package passta.paas_ta_back.controller.land;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import passta.paas_ta_back.repository.land.LandRepository;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class LandController {

    private final LandRepository landRepository;

    
}
