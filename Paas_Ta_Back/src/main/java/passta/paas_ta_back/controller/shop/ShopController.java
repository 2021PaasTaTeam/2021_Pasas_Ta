package passta.paas_ta_back.controller.shop;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import passta.paas_ta_back.domain.Shop;
import passta.paas_ta_back.repository.shop.RegisterDto;
import passta.paas_ta_back.repository.shop.ShopInfoDto;
import passta.paas_ta_back.repository.shop.ShopRepository;
import passta.paas_ta_back.service.shop.ShopService;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class ShopController {
    private final ShopService shopService;
    private final ShopRepository shopRepository;

    @PostMapping("/shop")
    public ResponseEntity<?> registerShop(@RequestBody RegisterDto registerDto){
        if(registerDto == null){
            return ResponseEntity.noContent().build();
        }
        Shop shop = shopService.registerShop(registerDto);
        if(shop == null){
            return ResponseEntity.noContent().build();
        }
        List<ShopInfoDto> collect = shopRepository.findAllWithUser(registerDto.getEmail())
                .stream().map(s -> new ShopInfoDto(s))
                .collect(Collectors.toList());
        return new ResponseEntity<>(collect, HttpStatus.CREATED);
    }
}
