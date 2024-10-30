import { Row, Typography, Col } from "antd";

const { Title, Paragraph } = Typography;

const App = () => (
  <Row justify={"center"} gutter={[24, 36]}>
    <Col span={20}>
      <Title style={{ textAlign: "center" }} level={2}>
        Sosyal Platformlar için İçerik Yönetimi
      </Title>

      <Paragraph>
        Sosyal medya uygulamaları içerisinde yaptığınız her paylaşım mevcut veri
        kümesinden yola çıkarak puanlanır ve kategori edilir. Burada belli başlı
        kategoriler olduğunu bilmek önemli amaç hem indexlemeyi kolaylaştırmak
        hem de siteler içerisinde gelir üretimi için kullanılan kaynaklara doğru
        sonuçların daha iyi verimlilikle iletilmesini sağlamak. Belli başlı
        platformlarda bunun nasıl yapıldığını gelişimini anlatalım. Örnekleri
        arttırmak ve çeşitlendirmek mümkün ancak aşağıdakilerle yetinelim.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        1 - Twitter
      </Title>
      <Paragraph>
        Twitterda eskiden sadece akış olarak bildiğimiz ve zaman ayarlı olarak
        sıralanan içerikler mevcuttu. Ancak son zamanlarda gelen
        güncellemelerden biriyle size önerilen twittler mevcut hale geldi.
        Eskiden belli zaman aralıklarda girip yeni tweetlerin gelmediği
        zamanlarda siteden çıkış yapardınız belirli özelliği sayfayı
        yenilesenizde yenilemesenizde zaman geçmedikçe yeni içerik
        göremeyeceğinizdi ve site içerisinde geçirdiğiniz zaman T idi. Önerilen
        tweetler noktasında sizin geçmişte beğendiğiniz, rt ettiğiniz
        paylaşımlardan takip ettiğiniz accountlardan yola çıkarak size uygun
        gelebilecek ve zaman geçmese de günün 24 saati içerik bulup
        görebileceğiniz ve başlangıçta T süre geçirdiğiniz twitter içerisinde T
        süresinden daha fazla süre geçirebilmeniz artık muhtemeldir.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        2- İnstagram
      </Title>
      <Paragraph>
        Yukarıda bahsedilen güncellemelerden bazılarını instagram daha önce
        yaptı. Aynı twitter gibi zaman akışlı içerikten reels gibi günün 24
        saati size uygun içerik bulabileceğiniz ve daha fazla zaman
        geçirebileceğiniz şekilde yenilendi. İnsanlar genel olarak yaptıkları
        şeyin ne olduğunu bile anlamadan veya hayatı yaşamadan yedikleri yemeğin
        tabağının fotoğrafını koyup anın değil dışarıdan gelecek yorumlara bağlı
        oldukları için genel olarak işe yaramaz dediğiniz bir çok şey toplumun
        genel kesiminde çok kolay alıcı bulur emin olabilirsiniz.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        3 - Toplum Yönetimi
      </Title>
      <Paragraph>
        Yukarıdaki 2 başlıktan yola çıkarak zaman içerisinde platformların
        bireylerden ziyade kitleleri etkilemek için kullanılmaya başladığını ve
        bunun komplo teorilerinden ziyade bilgi edinmek amacıyla yapıldığıyla
        ilgili genel kanı mevcut. Bir ülkede sosyal medya platformlarını
        kullanarak o ülkenin kültürüne ve genel insan davranışına uygun
        hareketleri öğrendiğinizde hem bilmediğiniz bir çok yeni bakış açısına
        ulaşabilirsiniz hem de bunu kullanabilirisiniz. Tiktok benzeri ve asya
        kökenli teknolojik diğer ürünlerin amerika menşeili avrupa pazarlarında
        çok istenmemesi veya dışarıya itilmeye çalışlmasının nedenlerinden
        başında bunlar gelir.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        4 - Starlink
      </Title>
      <Paragraph>
        Yine yukarıda anlatılan içeriklerden yola çıkarak bireyden başladığımız
        yolculukta sosyal medyayla devam etmiştik şimdi ise. Twitter, İnstagram
        Whatsapp, Linkedin vb. ayrı ayrı kullandığınız ve hepsinin kendi
        içerisinde kullanıcısının ve kullanıcılarının yaptıklarının farklı
        olduğu uygulamalardan. Tüm dünya data trafiğini veya hiç olmazsa 1 kaç
        ülke bile olsa tek bir yerden ilerletmeye çalıştığınızı düşünün
        edinebileceğiniz bilgi yönlendirme olumlu/olumsuz anlamda her şey
        olurdu. Diğer sosyal medya uygulamarını düşündüğünüzde onların
        toplamınında üzerinde olurdunuz.
      </Paragraph>

      <Title style={{ textAlign: "center" }} level={4}>
        5 - Genel Kanı
      </Title>
      <Paragraph>
        Hangi ülke olduğu önemli olmaksızın bazen çok farklı bir konunun
        gündemde olduğu ve tartışıldığı görülür. Burada yapılmak istenen siyasi
        anlamda belirli pozisyonlarda bulunan insanlarında bilgi sahibi olmadığı
        konular hakkında toplumun genelinde konuyu tartıştırmak ve genel
        izlenimi görebilmek. Kimin ne dediğinden ziyade kimin geçmişte ne
        söylediği ve şimdi ne söylediği konusuyla bağlantılı olduğunu
        düşünebilirsiniz. Bunu açıklamak gerekirse sizin tepkinizi geçmişte hep
        çekmiş birisinin söylediği ve toplumda yine tepki çekecek bir şey
        söylediğinde aslında zaten bunu söylediği şey ne kadar tepki çekiyor
        yanlış bir şey mi doğru bir şey mi bu anlaşılmaya çalışılıyor olabilir.
        Fake haber ve anlık gelişebilecek olaylarda genel izlenimi görebilmek
        takip edebilmek süreci izlediğinizde daha anlaşılabilir hale geliyor.
      </Paragraph>
    </Col>
  </Row>
);

export default App;
