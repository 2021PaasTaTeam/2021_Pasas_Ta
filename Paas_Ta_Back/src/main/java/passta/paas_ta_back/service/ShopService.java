package passta.paas_ta_back.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.domain.*;
import passta.paas_ta_back.repository.land.LandRepository;
import passta.paas_ta_back.repository.shop.RegisterDto;
import passta.paas_ta_back.repository.shop.ShopModifyDto;
import passta.paas_ta_back.repository.shop.ShopRepository;
import passta.paas_ta_back.repository.user.UserRepository;
import passta.paas_ta_back.web.aws.FileUploadService;

import java.io.IOException;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ShopService {
    @Autowired
    ShopRepository shopRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    LandRepository landRepository;
    @Autowired
    FileUploadService fileUploadService;

    @Transactional
    public Shop registerShop(RegisterDto registerDto) throws IOException {
        List<User> users = userRepository.findByEmail(registerDto.getEmail());
        if (users.size() == 0){
            return null;
        }
        //Shop 테이블내에 사업자 등록 번호가 없는 경우 가게 등록이 허용
        List<Shop> shops = shopRepository.findByRegistrationNum(registerDto.getRegistrationNum());
        if (shops.size() == 0){
            UploadFile storeImageFiles = fileUploadService.uploadImage(registerDto.getImage());
            Land findLandById = landRepository.findByIdAndSeat(registerDto.getLandId(), Seat.NO);
            if (findLandById == null){
                System.out.println("자리가 이미 있음.");
                return null;
            }
            Shop shop = Shop.createShop(
                    users.get(0),
                    registerDto.getRegistrationNum(),
                    registerDto.getName(),
                    registerDto.getPhone(),
                    registerDto.getRegion(),
                    registerDto.getAddress(),
                    registerDto.getBusinessType(),
                    storeImageFiles,
                    findLandById);
            Shop saveShop = shopRepository.save(shop);
            return saveShop;
        }
        return null;
    }

    public List<Shop> shops(){
        return shopRepository.findAll();
    }

    public Shop findShopById(Long id){
        return shopRepository.findById(id).orElse(null);
    }


    @Transactional
    public Shop changeShopInfoById(Long id, ShopModifyDto shopModifyDto){
        Shop shop = shopRepository.findById(id).get();
        if (shop == null){
            return null;
        }
        return shop.changeShopInfo(
                shopModifyDto.getName(),
                shopModifyDto.getPhone(),
                shopModifyDto.getRegion(),
                shopModifyDto.getAddress(),
                shopModifyDto.getBusinessType());
    }

    @Transactional
    public boolean deleteShopById(Long id) {
        Shop shopById = findShopById(id);
        if (shopById == null){
            return false;
        }
        //자리 다시 SEAT.NO(자리 없음) 셋팅
        shopById.getLand().setSeatNo();
        shopRepository.deleteById(id);
        return true;
    }

    public List<Item> findItemByShopId(Long shopid){
        Shop shop = shopRepository.findById(shopid).orElse(null);
        if (shop == null){
            return null;
        }
        return shop.getItems();
    }
}
