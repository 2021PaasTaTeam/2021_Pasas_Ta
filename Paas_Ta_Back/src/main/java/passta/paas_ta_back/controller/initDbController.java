package passta.paas_ta_back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import passta.paas_ta_back.domain.*;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Transactional
@RequiredArgsConstructor
@RestController
public class initDbController {

    private final EntityManager em;

    @PostMapping("/init")
    public ResponseEntity<?> initStart(){
        //초기 admin 세팅
        User admin = User.createUser("admin", "admin", "admin", "admin", UserType.ADMIN);
        em.persist(admin);
        //초기 사용자 세팅
        User consumer = User.createUser("consumer1", "consumer1@email.com", "1234", "서울특별시 강남구 개포동", UserType.CONSUMER);
        em.persist(consumer);
        // 초기 가게 사용자 세팅
        User seller1 = User.createUser("seller1", "seller1@email.com", "1234", "경기도 안양시 동안구 호계3동", UserType.SELLER);
        em.persist(seller1);
        User seller2 = User.createUser("seller2", "seller2@email.com", "1234", "서울특별시 강동구 강일동", UserType.SELLER);
        em.persist(seller2);
        User seller3 = User.createUser("seller3", "seller3@email.com", "1234", "서울특별시 강북구 미아동", UserType.SELLER);
        em.persist(seller3);
        User seller4 = User.createUser("seller4", "seller4@email.com", "1234", "서울특별시 영등포구 문래동1가", UserType.SELLER);
        em.persist(seller4);


        List<String> locations = Arrays.asList("성북", "동작", "종로", "구로", "서초", "영등포");
        List<Land> lands = new ArrayList<>();

        //지역구 돌면서 세팅
        for (int loc = 0; loc < 6; loc++) {
            for (int y = 250; y <= 650; y += 400) {
                for (int x = 200; x <= 1700; x += 600) {
                    //초기 Land 좌표 셋팅값
                    LandLocations landLocations = new LandLocations(x, y, x + 300, y, x, y + 200, x + 300, y + 200);
                    //초기 Land셋팅
                    Land land = Land.createLand(locations.get(loc), landLocations);
                    lands.add(land);
                    em.persist(land);
                }
            }
        }


        // 초기 가게 세팅
        UploadFile uploadFile1 = new UploadFile("사용자파일명1.jpg", "uuid파일명1.jpg");
        Shop teaShop = Shop.createShop(
                seller1,
                "201-03-47442",
                "수연생선방",
                "02-1122-1122",
                "성북구",
                "서울특별시 성북구 성북로26길",
                "생선",
                uploadFile1,
                lands.get(0));
        em.persist(teaShop);

        UploadFile uploadFile2 = new UploadFile("사용자파일명2.jpg", "uuid파일명2.jpg");


        Shop bakerShop = Shop.createShop(
                admin,
                "201-03-47443",
                "성북동생선공장",
                "02-763-1234",
                "성북구",
                "서울특별시 성북구 대사관로 23",
                "생선",
                uploadFile2,
                lands.get(3));
        em.persist(bakerShop);


        Shop cafeShop = Shop.createShop(
                seller3,
                "201-03-47444",
                "알렉스더한복 성북점",
                "02-1242-1212",
                "성북구",
                "서울특별시 성북구 성북로28길",
                "한복",
                uploadFile2,
                lands.get(4));
        em.persist(cafeShop);


        Shop shop4 = Shop.createShop(
                seller4,
                "201-03-47445",
                "LongBoat Smoker",
                "02-7072-1920",
                "성북구",
                "서울특별시 성북구 미아동",
                "생선",
                uploadFile2,
                lands.get(5));
        em.persist(shop4);

        // 초기 image list 세팅
        List<UploadFile> uploadFiles = new ArrayList<>();
        UploadFile itemImage = new UploadFile("item파일명.jpg", "itemUUID파일명.jpg");
        for (int i = 0; i < 3; i++) {
            uploadFiles.add(itemImage);
        }

        // 초기 item 세팅
        Item item1 = Item.createItem(
                teaShop,
                "고등어",
                "싱싱한 고등어, 눈이 반짝인다.",
                3000,
                27,
                uploadFiles);
        em.persist(item1);

        Item item2 = Item.createItem(
                teaShop,
                "광어",
                "싱싱한 광어, 날 노려보고 있다.",
                20000,
                20,
                uploadFiles);
        em.persist(item2);

        Item item3 = Item.createItem(
                teaShop,
                "문어",
                "싱싱한 문어, 서로 팔씨름을 하고 있다.",
                80000,
                30,
                uploadFiles);
        em.persist(item3);

        // 주문 finish 된 상태
        List<OrderItem> orderItems = new ArrayList<>();
        OrderItem orderItem1 = OrderItem.createOrderItem(item1, item1.getPrice() * 2, 2);
        em.persist(orderItem1);
        OrderItem orderItem2 = OrderItem.createOrderItem(item2, item2.getPrice() * 2, 2);
        em.persist(orderItem2);
        OrderItem orderItem3 = OrderItem.createOrderItem(item3, item3.getPrice() * 5, 5);
        em.persist(orderItem3);
        orderItems.add(orderItem1);
        orderItems.add(orderItem2);
        orderItems.add(orderItem3);
        Order order = Order.createOrder(seller1, orderItems);
        order.finishOrder();
        em.persist(order);
        return ResponseEntity.ok("Ok");
    }
}
