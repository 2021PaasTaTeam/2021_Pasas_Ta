package passta.paas_ta_back.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ItemImages {

    @Id
    @GeneratedValue
    @Column(name = "ItemImages_id")
    private Long id;

    // ITEM 의 IMAGE
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    // 유저가 저장한 IMAGE 파일명
    private String uploadFileName;

    /**
     * 서버에 저장하는 파일명
     * 업로드 된 파일명으로 서버에 저장 시 이름이 중복될 수 있음. 랜덤값으로 만드는 파일 이름
     */
    private String storeFileName;

    // ITEM 주입, ITEM에  IMAGE 추가
    public void setItemInItemImages(Item item) {
        this.item = item;
        item.getItemImages().add(this);
    }


    public static ItemImages createItemImages(Item item, String uploadFileName, String storeFileName) {
        ItemImages itemImages = new ItemImages();
        itemImages.setItemInItemImages(item);
        itemImages.uploadFileName = uploadFileName;
        itemImages.storeFileName = storeFileName;
        return itemImages;
    }
}
