package passta.paas_ta_back;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import passta.paas_ta_back.domain.*;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Component
@RequiredArgsConstructor
public class initDb {

    private final InitService initService;

    @PostConstruct
    public void init() {
        initService.dbInit1();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService {

        private final EntityManager em;

        public void dbInit1() {
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
            User seller5 = User.createUser("seller5", "seller5@email.com", "1234", "서울특별시 영등포구 문래동1가", UserType.SELLER);
            em.persist(seller5);
            User seller6 = User.createUser("seller6", "seller6@email.com", "1234", "서울특별시 영등포구 문래동1가", UserType.SELLER);
            em.persist(seller6);
            User seller7 = User.createUser("seller7", "seller7@email.com", "1234", "서울특별시 영등포구 문래동1가", UserType.SELLER);
            em.persist(seller7);
            User seller8 = User.createUser("seller8", "seller8@email.com", "1234", "서울특별시 영등포구 문래동1가", UserType.SELLER);
            em.persist(seller8);
            User seller9 = User.createUser("seller9", "seller9@email.com", "1234", "서울특별시 영등포구 문래동1가", UserType.SELLER);
            em.persist(seller9);



            List<String> locations = Arrays.asList("성북구", "동작구", "종로구", "구로구", "서초구", "영등포구");
            // 0, 6 ,12 ,18, 24, 30
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
            Shop shop1 = Shop.createShop(
                    seller1,
                    "201-03-47442",
                    "만선수산",
                    "02-1122-1122",
                    "성북구",
                    "성북로26길",
                    "기타",
                    new UploadFile("shop1.jpg", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/b4ea9163-c65e-4457-a5e8-ddd40814b34c.jpg"),
                    lands.get(0));
            em.persist(shop1);

            Shop shop2 = Shop.createShop(
                    admin,
                    "201-03-47443",
                    "생선파는 아지야",
                    "02-763-1234",
                    "성북구",
                    "대사관로 23",
                    "기타",
                    new UploadFile("shop2.jpeg", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/3efcd112-e7bb-4daf-8a58-b66de542a7d6.jpeg"),
                    lands.get(3));
            em.persist(shop2);


            Shop shop3 = Shop.createShop(
                    seller3,
                    "201-03-47444",
                    "화연 한복 성북점",
                    "02-1242-1212",
                    "성북구",
                    "성북로28길",
                    "한복",
                    new UploadFile("shop3.jpg", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/8e779d61-f3f4-434c-acf0-0767bdb89e2c.jpg"),
                    lands.get(4));
            em.persist(shop3);

            Shop shop4 = Shop.createShop(
                    seller4,
                    "201-03-47445",
                    "LongBoat Smoker",
                    "02-7072-1920",
                    "성북구",
                    "미아동",
                    "기타",
                    new UploadFile("shop4.jpg", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/e3de1c4a-d86f-4fe2-9a07-a69c7dd25d9a.jpg"),
                    lands.get(5));
            em.persist(shop4);

            Shop shop5 = Shop.createShop(
                    seller5,
                    "201-03-47446",
                    "너네 빈대떡",
                    "02-7022-2121",
                    "종로구",
                    "예지동",
                    "음식점",
                    new UploadFile("shop5.png", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/d3ea611e-c87c-4768-b51c-e1649b0eeb2b.png"),
                    lands.get(12));
            em.persist(shop5);

            Shop shop6 = Shop.createShop(
                    seller6,
                    "201-03-47447",
                    "토끼네 떡집",
                    "02-7022-2121",
                    "서초구",
                    "예지동",
                    "음식점",
                    new UploadFile("shop6.JPG", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/05fc6524-4ee5-4cc6-91e7-bf5150f617d1.JPG"),
                    lands.get(25));
            em.persist(shop6);


            Shop shop7 = Shop.createShop(
                    seller7,
                    "201-03-47448",
                    "어깨 빵집",
                    "02-1222-2121",
                    "동작구",
                    "국사봉5길",
                    "기타",
                    new UploadFile("shop7.png", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/0e6e047b-a969-4392-986c-596c85e4df0c.png"),
                    lands.get(8));
            em.persist(shop7);

            Shop shop8 = Shop.createShop(
                    seller8,
                    "201-03-47449",
                    "야스오 정글 정육점",
                    "02-1332-2121",
                    "구로구",
                    "구로역 1번출구",
                    "기타",
                    new UploadFile("shop8.JPG", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/5e50daaf-413b-4366-8e37-ee59d9ffab60.JPG"),
                    lands.get(19));
            em.persist(shop8);

            Shop shop9 = Shop.createShop(
                    seller9,
                    "201-03-47450",
                    "반지의 제왕 공방",
                    "02-1222-2121",
                    "영등포구",
                    "도림동",
                    "공방",
                    new UploadFile("shop9.JPG", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/c936b80b-e288-457d-b354-6923cf7562f5.JPG"),
                    lands.get(32));
            em.persist(shop9);


            // 초기 image list 세팅
            List<UploadFile> uploadFiles = new ArrayList<>();

            uploadFiles.add(new UploadFile("fish1_1.jpg", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/3c4a1659-c463-4ad2-aea8-d858708f5cc2.jpg"));
            uploadFiles.add(new UploadFile("fish1_2.jpg", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/b6aa25fd-6950-4c74-b4a7-8d30fc748cec.jpg"));
            uploadFiles.add(new UploadFile("fish1_3.jpg", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/07c1b9dc-0cce-4d7d-b157-e7080869766e.jpg"));

            // 초기 item 세팅
            Item item1 = Item.createItem(
                    shop1,
                    "고등어",
                    "싱싱한 고등어",
                    3000,
                    27,
                    uploadFiles);
            em.persist(item1);

            uploadFiles.clear();
            uploadFiles.add(new UploadFile("fish2_1.png", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/83cd1ff1-6f14-4d41-b500-fde655f62ddf.png"));
            uploadFiles.add(new UploadFile("fish2_2.jpg", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/3e6c8a5c-d0af-4f68-bf17-7723d12f3946.jpg"));
            uploadFiles.add(new UploadFile("fish2_3.jpg", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/4a127690-d6e9-4b59-8f80-7de6ad8fc253.jpg"));


            Item item2 = Item.createItem(
                    shop1,
                    "광어",
                    "싱싱한 광어",
                    20000,
                    20,
                    uploadFiles);
            em.persist(item2);

            uploadFiles.clear();
            uploadFiles.add(new UploadFile("octopus_1.jpg", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/a3c76609-d0f3-43a9-8564-8b352c682fa6.jpg"));
            uploadFiles.add(new UploadFile("octopus_2.JPG", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/289bfc34-ec31-4aa8-9cb1-9ec665dce69b.JPG"));
            uploadFiles.add(new UploadFile("octopus_3.png", "https://springboot-paasta.s3.ap-northeast-2.amazonaws.com/e0b29f03-124e-4d45-8f7d-257373671346.png"));


            Item item3 = Item.createItem(
                    shop1,
                    "문어",
                    "싱싱한 문어",
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
        }
    }
}
