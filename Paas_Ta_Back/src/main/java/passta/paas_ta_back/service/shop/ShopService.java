package passta.paas_ta_back.service.shop;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.domain.Shop;
import passta.paas_ta_back.domain.User;
import passta.paas_ta_back.repository.shop.RegisterDto;
import passta.paas_ta_back.repository.shop.ShopModifyDto;
import passta.paas_ta_back.repository.shop.ShopRepository;
import passta.paas_ta_back.repository.user.DeleteDto;
import passta.paas_ta_back.repository.user.UserModifyDto;
import passta.paas_ta_back.repository.user.UserRepository;
import passta.paas_ta_back.service.user.UserService;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ShopService {
    @Autowired
    ShopRepository shopRepository;
    @Autowired
    UserRepository userRepository;

    @Transactional
    public Shop registerShop(RegisterDto registerDto) {
        List<User> users = userRepository.findByEmail(registerDto.getEmail());
        if (users.size() == 0){
            return null;
        }
        //Shop 테이블내에 사업자 등록 번호가 없는 경우 가게 등록이 허용
        List<Shop> shops = shopRepository.findByRegistrationNum(registerDto.getRegistrationNum());
        if (shops.size() == 0){
            Shop shop = Shop.createShop(
                    users.get(0),
                    registerDto.getRegistrationNum(),
                    registerDto.getName(),
                    registerDto.getPhone(),
                    registerDto.getAddress(),
                    registerDto.getBusinessType(),
                    registerDto.getImages());
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
                shopModifyDto.getAddress(),
                shopModifyDto.getImage());
    }

    @Transactional
    public boolean deleteShopById(Long id) {
        Shop shopById = findShopById(id);
        if (shopById == null){
            return false;
        }
        userRepository.deleteById(id);
        return true;
    }
}
