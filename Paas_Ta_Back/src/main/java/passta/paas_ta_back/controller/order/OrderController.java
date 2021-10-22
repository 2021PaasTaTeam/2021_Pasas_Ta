package passta.paas_ta_back.controller.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.service.OrderService;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @GetMapping("/order")
    public ResponseEntity<?> totalOrderView() {
        return new ResponseEntity(, HttpStatus.OK);
    }

    @PostMapping("/order")
    public ResponseEntity<?> registerOrder() {
        return new ResponseEntity(, HttpStatus.CREATED);
    }

    @GetMapping("/order/{id}")
    public ResponseEntity<?> findOrderOne(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(, HttpStatus.OK);
    }

    @PostMapping("/order/{id}")
    public ResponseEntity<?> modifyOrder(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(, HttpStatus.OK);
    }

    @DeleteMapping("/order/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable(name = "id") Long id) {
        return new ResponseEntity(, HttpStatus.OK);
    }
}
