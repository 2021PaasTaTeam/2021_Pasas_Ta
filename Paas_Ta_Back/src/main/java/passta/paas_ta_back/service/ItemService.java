package passta.paas_ta_back.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.repository.item.ItemRepository;
import passta.paas_ta_back.repository.order.OrderRepository;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ItemService {
    @Autowired
    ItemRepository itemRepository;


}
