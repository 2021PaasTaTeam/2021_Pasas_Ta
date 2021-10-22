package passta.paas_ta_back.controller.orderItem;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.service.OrderItemService;
import passta.paas_ta_back.service.ShopService;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class OrderItemController {
    private final OrderItemService orderItemService;

    @GetMapping("/orderItem")
    public ResponseEntity<?> totalOrderItemView() {
        return new ResponseEntity(, HttpStatus.OK);
    }

    @PostMapping("/orderItem")
    public ResponseEntity<?> registerOrderItem() {
        return new ResponseEntity(, HttpStatus.CREATED);
    }

    @GetMapping("/orderorderItem/{id}")
    public ResponseEntity<?> findOrderItemOne(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(, HttpStatus.OK);
    }

    @PostMapping("/orderItem/{id}")
    public ResponseEntity<?> modifyOrderItem(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(, HttpStatus.OK);
    }

    @DeleteMapping("/orderItem/{id}")
    public ResponseEntity<?> deleteOrderItem(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(, HttpStatus.OK);
    }
}
