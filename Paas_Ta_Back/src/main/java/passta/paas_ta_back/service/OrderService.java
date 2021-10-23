package passta.paas_ta_back.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.domain.Order;
import passta.paas_ta_back.repository.order.OrderRepository;
import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public List<Order> orders(){
        return orderRepository.findAll();
    }

    public Order findOrderById(Long id){
        return orderRepository.findById(id).orElse(null);
    }

    @Transactional
    public boolean deleteOrderById(Long id) {
        Order orderById = findOrderById(id);
        if (orderById == null){
            return false;
        }
        orderRepository.deleteById(id);
        return true;
    }
}
