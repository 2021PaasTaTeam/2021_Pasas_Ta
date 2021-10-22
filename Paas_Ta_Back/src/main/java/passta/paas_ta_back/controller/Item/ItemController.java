package passta.paas_ta_back.controller.Item;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.service.ItemService;
import passta.paas_ta_back.service.ShopService;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;

    @GetMapping("/item")
    public ResponseEntity<?> totalItemView() {
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/item")
    public ResponseEntity<?> registerItem() {
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/item/{id}")
    public ResponseEntity<?> findItemOne(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/item/{id}")
    public ResponseEntity<?> modifyItem(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/item/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(HttpStatus.OK);
    }
}
