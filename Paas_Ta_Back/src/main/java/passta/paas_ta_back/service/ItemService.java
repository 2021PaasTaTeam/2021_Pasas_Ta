package passta.paas_ta_back.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.domain.Item;
import passta.paas_ta_back.domain.Shop;
import passta.paas_ta_back.domain.UploadFile;
import passta.paas_ta_back.repository.item.ItemModifyDto;
import passta.paas_ta_back.repository.item.ItemRegisterDto;
import passta.paas_ta_back.repository.item.ItemRepository;
import passta.paas_ta_back.repository.shop.ShopRepository;
import passta.paas_ta_back.web.aws.FileUploadService;

import java.io.IOException;
import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ItemService {
    @Autowired
    ItemRepository itemRepository;
    @Autowired
    ShopRepository shopRepository;
    @Autowired
    FileUploadService fileUploadService;

    @Transactional
    public Item registerItem(ItemRegisterDto itemRegisterDto) throws IOException {
        Shop shop = shopRepository.findById(itemRegisterDto.getShopId()).get();
        if(shop == null){
            return null;
        }
        List<Item> byNameAndShop = itemRepository.findByNameAndShop(itemRegisterDto.getItemName(), shop);
        if (byNameAndShop.size() == 0) {
            List<UploadFile> uploadFiles = fileUploadService.uploadImages(itemRegisterDto.getItemImages());
            Item item = Item.createItem(
                    shop,
                    itemRegisterDto.getItemName(),
                    itemRegisterDto.getItemContent(),
                    itemRegisterDto.getItemPrice(),
                    itemRegisterDto.getItemStock(),
                    uploadFiles);
            Item saveItem = itemRepository.save(item);
            return saveItem;
        }
        return null;
    }

    public List<Item> items() {
        return itemRepository.findAll();
    }

    public Item findItemById(Long id) {
        return itemRepository.findById(id).orElse(null);
    }

    public List<Item> findItemByShopId(Long shopId) {
        Shop shop = shopRepository.findById(shopId).orElse(null);
        return shop != null ? shop.getItems():null;
    }

    @Transactional
    public Item changeItemInfoById(Long id, ItemModifyDto itemModifyDto) {
        Item item = itemRepository.findById(id).get();
        if (item == null) {
            return null;
        }
        return item.changeItemInfo(
                itemModifyDto.getItemContent(),
                itemModifyDto.getItemPrice(),
                itemModifyDto.getItemStock());
    }

    @Transactional
    public boolean deleteItemById(Long id) {
        Item itemById = findItemById(id);
        if (itemById == null) {
            return false;
        }

        itemRepository.deleteById(id);
        return true;
    }

}
