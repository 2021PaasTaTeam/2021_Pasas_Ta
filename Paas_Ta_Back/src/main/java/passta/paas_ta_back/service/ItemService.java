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
import passta.paas_ta_back.repository.shop.ShopModifyDto;
import passta.paas_ta_back.repository.shop.ShopRepository;
import passta.paas_ta_back.web.file.FileStore;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

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
    FileStore fileStore;

    @Transactional
    public Item registerItem(ItemRegisterDto itemRegisterDto) throws IOException {

        List<Item> byNameAndShop = itemRepository.findByNameAndShop(
                itemRegisterDto.getItemName(),
                itemRegisterDto.getShopId());
        if (byNameAndShop.size() == 0) {
            List<UploadFile> uploadFiles = fileStore.storeFiles(itemRegisterDto.getItemImages());
            Shop shop = shopRepository.findById(itemRegisterDto.getShopId()).get();
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
       return shopRepository.findById(shopId).orElse(null).getItems();
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
