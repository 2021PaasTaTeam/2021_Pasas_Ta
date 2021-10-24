package passta.paas_ta_back.controller.Item;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.controller.dto.DeleteCheckDto;
import passta.paas_ta_back.domain.Item;
import passta.paas_ta_back.repository.item.ItemModifyDto;
import passta.paas_ta_back.repository.item.ItemRegisterDto;
import passta.paas_ta_back.service.ItemService;
import passta.paas_ta_back.service.ShopService;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;

    @GetMapping("/item")
    public ResponseEntity<?> totalItemView() {
        List<Item> items = itemService.items();
        List<ItemInfoDto> itemCollect = items.stream().map(ItemInfoDto::new).collect(Collectors.toList());
        return new ResponseEntity(itemCollect, HttpStatus.OK);
    }

    @PostMapping(value = "/item", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> registerItem(@ModelAttribute ItemRegisterDto itemRegisterDto) throws IOException {
        if (itemRegisterDto == null){
            return ResponseEntity.ok(null);
        }
        Item item = itemService.registerItem(itemRegisterDto);
        if (item == null){
            return ResponseEntity.ok(null);
        }
        List<Item> itemByShopId = itemService.findItemByShopId(item.getShop().getId());
        List<ItemInfoDto> itemCollect = itemByShopId.stream().map(ItemInfoDto::new).collect(Collectors.toList());
        return new ResponseEntity(itemCollect, HttpStatus.CREATED);
    }

    @GetMapping("/item/{id}")
    public ResponseEntity<?> findItemOne(@PathVariable(name = "id") Long id) {
        Item itemById = itemService.findItemById(id);
        return itemById != null ?
                ResponseEntity.ok(new ItemInfoDto(itemById)):
                ResponseEntity.ok(null);
    }

    @PostMapping("/item/{id}")
    public ResponseEntity<?> modifyItem(@PathVariable(name = "id") Long id, @RequestBody ItemModifyDto itemModifyDto) {
        Item itemById = itemService.changeItemInfoById(id, itemModifyDto);
        return itemById != null ?
                ResponseEntity.ok(new ItemInfoDto(itemById)) :
                ResponseEntity.ok(null);
    }

    @DeleteMapping("/item/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable(name = "id") Long id) {
        boolean deleteItemById = itemService.deleteItemById(id);
        return deleteItemById == true ?
                ResponseEntity.ok(new DeleteCheckDto(deleteItemById)) :
                ResponseEntity.ok(null);
    }
}
