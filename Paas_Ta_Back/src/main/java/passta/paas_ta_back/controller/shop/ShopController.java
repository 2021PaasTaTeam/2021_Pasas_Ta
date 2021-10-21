package passta.paas_ta_back.controller.shop;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.controller.dto.DeleteCheckDto;
import passta.paas_ta_back.domain.Shop;
import passta.paas_ta_back.repository.shop.RegisterDto;
import passta.paas_ta_back.controller.shop.dto.ShopInfoDto;
import passta.paas_ta_back.repository.shop.ShopModifyDto;
import passta.paas_ta_back.repository.shop.ShopRepository;
import passta.paas_ta_back.service.shop.ShopService;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class ShopController {
    private final ShopService shopService;
    private final ShopRepository shopRepository;

    @GetMapping("/shop")
    public ResponseEntity<?> totalShopView(){
        List<ShopInfoDto> shopInfoDtoList = shopService.shops().stream().map(ShopInfoDto::new).collect(Collectors.toList());
        return new ResponseEntity(shopInfoDtoList, HttpStatus.OK);
    }

    @PostMapping(value = "/shop", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> registerShop(@ModelAttribute RegisterDto registerDto) throws IOException {
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

    @GetMapping("/shop/{id}")
    public ResponseEntity<?> findShopOne(@PathVariable(name = "id") Long id){
        Shop shopById = shopService.findShopById(id);
        if (shopById == null) {
            return new ResponseEntity(null, HttpStatus.OK);
        }
        return new ResponseEntity(new ShopInfoDto(shopById), HttpStatus.OK);
    }

    @PostMapping("/shop/{id}")
    public ResponseEntity<?> modifyShop(@PathVariable(name = "id") Long id, @RequestBody ShopModifyDto shopModifyDto){
        Shop shop = shopService.changeShopInfoById(id, shopModifyDto);
        if (shop == null) {
            return null;
        }
        return new ResponseEntity<>(new ShopInfoDto(shop), HttpStatus.OK);
    }

    @DeleteMapping("/shop/{id}")
    public ResponseEntity<?> deleteShop(@PathVariable(name = "id") Long id){
        boolean shopDeleteCkeck = shopService.deleteShopById(id);
        if (shopDeleteCkeck == false){
            return new ResponseEntity(null, HttpStatus.OK);
        }
        return new ResponseEntity(new DeleteCheckDto(shopDeleteCkeck),HttpStatus.OK);
    }
}
