import { useParams, Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  Image,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import covid1 from  "../../images/covid19/covid-1.png"
import  covid2 from    "../../images/covid19/covid-2.png"
import dama1 from "../../images/dama/normal-screen-with-menu.png"
import dama2 from  "../../images/dama/normal-screen-without-menu.png"
import dama3 from  "../../images/dama/winner-screen.png"
import typing from  "../../images/typingspeed/article1.png"
import typing1 from "../../images/typingspeed/article1.png"
import typing2 from  "../../images/typingspeed/champions.png"
import typing3 from "../../images/typingspeed/main.png"
import typing4 from "../../images/typingspeed/profile.png"
import weather from "../../images/weather/weather-api.png"
import shop from "../../images/shopping/signin.png"
import shop1 from "../../images/shopping/signup.png"
import shop2 from "../../images/shopping/main.png"
import shop3 from "../../images/shopping/mainpagemenuopen.png"
import shop4 from "../../images/shopping/mainpageslideopen.png"
import shop5 from "../../images/shopping/mainproducts.png"
import shop6 from "../../images/shopping/mainproductsbottom.png"
import shop7 from "../../images/shopping/navbarproducts.png"
import shop8 from "../../images/shopping/language.png"
import shop9 from "../../images/shopping/profileempty.png"
import shop10 from "../../images/shopping/profilefull.png"
import shop11 from "../../images/shopping/profilebottom.png"
import shop12 from "../../images/shopping/productspage.png"
import shop13 from "../../images/shopping/orderspage.png"
import shop14 from "../../images/shopping/likedproducts.png"
import shop15 from "../../images/shopping/kind-type-pages.png"
import shop16 from "../../images/shopping/kindlikedpages.png"
import shop17 from "../../images/shopping/favproductempty.png"
import shop18 from "../../images/shopping/favproductfull.png"
import shop19 from "../../images/shopping/basket.png"
import shop20 from "../../images/shopping/basketbottom.png"
import shop21 from "../../images/shopping/basketpaying.png"
import shop22 from "../../images/shopping/contactpage.png"
import shop23 from "../../images/shopping/alladdresses.png"
import shop24 from "../../images/shopping/addaddress.png"
import shop25 from "../../images/shopping/allcomments.png"
import shop26 from "../../images/shopping/allcommentsbottom.png"
import markdown from "../../images/markdown/markdown.png"
import markdown1 from "../../images/markdown/markdown-info.png"
import puzzle from "../../images/puzzle/with-menu.png"
import puzzle1 from "../../images/puzzle/without-menu.png"
import note from "../../images/note-app/empty.png"
import note1 from "../../images/note-app/full.png"
import note2 from "../../images/note-app/writing.png"
import note3 from "../../images/note-app/searching1.png"
import note4 from "../../images/note-app/searching2.png"
import ig from "../../images/ig-clone/signin.png"
import ig1 from "../../images/ig-clone/main.png"
import ig2 from "../../images/ig-clone/mainmenuopen.png"
import ig3 from "../../images/ig-clone/mainsearch.png"
import ig4 from "../../images/ig-clone/notifications-in-main.png"
import ig5 from "../..//images/ig-clone/notifications-in-messages.png"
import ig6 from "../../images/ig-clone/messages.png"
import ig7 from "../../images/ig-clone/sendmessage.png"
import ig8 from "../../images/ig-clone/flow.png"
import yp from "../../images/clone-youtube/logout.png"
import yp1 from "../../images/clone-youtube/logoutmenu.png"
import yp3 from "../../images/clone-youtube/signin.png"
import yp4 from "../../images/clone-youtube/signin2.png"
import yp5 from "../../images/clone-youtube/main-black.png"
import yp6 from "../../images/clone-youtube/main-changecolor.png"
import yp2 from "../../images/clone-youtube/main-white.png"
import yp7 from "../../images/clone-youtube/main-white-menuopen.png"
import yp8 from "../../images/clone-youtube/main-slideopen.png"
import yp9 from "../../images/clone-youtube/your-profile.png"
import yp10 from "../../images/clone-youtube/history.png"
import yp11 from "../../images/clone-youtube/historyblack.png"
import yp12 from "../../images/clone-youtube/playlist.png"
import yp22 from "../../images/clone-youtube/logoutslidemenu.png"
import yp13 from "../../images/clone-youtube/video.png"
import yp14 from "../../images/clone-youtube/videoslidemenuopen.png"
import yp15 from "../../images/clone-youtube/videooptions.png"
import yp16 from "../../images/clone-youtube/videodes.png"
import yp17 from "../../images/clone-youtube/videodesfull.png"
import yp18 from "../../images/clone-youtube/channel.png"
import yp19 from "../../images/clone-youtube/channeldes.png"
import yp20 from "../../images/clone-youtube/channelmiddle.png"
import yp21 from "../../images/clone-youtube/channelbottom.png"



const projects = [
  {
    id: "covid",
    title: "Covid-19 Tracker",
    description: "Global Covid-19 verilerini canlı olarak gösteren bir React projesi.",
    tech: "React, API, Chart.js",
    github: "https://github.com/mervehediyeozen/covid-19-global-tracker",
    live: "https://covid19-global-tracker.vercel.app/",
    images: [
        { image : covid1 , des:"Yukarıdaki seçme inputu ile herhangi bir ülkeden alınan güncel veriler. -1 "},
        { image : covid2 , des:"Yukarıdaki seçme inputu ile herhangi bir ülkeden alınan güncel veriler. -2 "},
     
      
    ],
  },
    {
    id:"type-fast",
    title: "Speed Typing Fast App",
    description: "Klavyede yazma hızınızı ölçen, oturum açıp giriş yapabileceğiniz,skorlarınızı tutabileceğiniz proje.",
    tech: "React, Redux, Chakra UI",
    github: "https://github.com/mervehediyeozen/speed--typing-test-app",
    live: "https://speed-typing-test-app.vercel.app/",
      images: [
         { image : typing3 , des:"Ana sayfa - oyunun oynandığı alan."},
        { image : typing4 , des:"Eğer giriş yapıldıysa (oturum açılabilir) aktif olacak olan profil ekranı."},
        { image : typing2, des:"Global olarak en iyi skorların gözüktüğü sayfa"},
         { image : typing , des:"Yan menüdeki butonlar ile erişlebilecek bir makale. -1 "},
        {image : typing1, des:"Yan menüdeki butonlar ile erişlebilecek bir makale. -2"},

      
     
    ],

  },
    {
    id: "checkers",
    title: "Turkish-Checkers Game",
    description: "Türk Daması kurallarına göre geliştirilmiş react projesi.",
    tech: "React, Redux, Chakra UI",
    github: "https://github.com/mervehediyeozen/turkish-checkers-game",
    live: "https://turkish-checkers-game-dun.vercel.app/",
       images: [
        { image : dama1 , des:"Kuralların bulunduğu menüyü kapatmak için sağda bulunan butona tıklanmadığı hali ile oyun ekranı"},
       { image : dama2 , des:"Kuralların bulunduğu menüyü kapatmak için sağda bulunan butona tıklanmış hali ile oyun ekranı"},
       { image : dama3, des:"Oyun bittiğinde gelen kazanan ekranı."},

      
     
    ],
  },
  {
    id: "weather",
    title: "Hava Durumu Uygulaması",
    description: "Konum bazlı hava durumu bilgilerini gösteren uygulama.",
    tech: "React, Chakra UI, OpenWeather API",
    github: "#",
    live: "#",
    images: [
        { image : weather , des:"TÜrkiye'de istenilen ili seçmeniz dahilinde bu haftanın günlerine göre güncel verileri sizinle paylaşan anasayfa."},
    ],
  },
  {
    id: "ecommerce",
    title: "E-Ticaret Platformu",
    description: "Çok dilli destekli, sepet sistemli gelişmiş e-ticaret web uygulaması.",
    tech: "React, Redux, Context API, Chakra UI",
    github: "https://github.com/mervehediyeozen/shopping-demo",
    live: "https://shopping-demo-wheat.vercel.app/Main",
   images: [
         { image : shop , des:"Giriş yapma ekranı"},
         { image : shop1 , des:"Kayıt olma ekranı"},
         { image : shop2 , des:"Anasayfa"},
         { image : shop3 , des:"Anasayfa menüsü açık hali."},
         { image : shop4 , des:"Anasayfa slide menüsü açık hali."},
         { image : shop5 , des:"Anasayfa ekranındaki ürünler."},
         { image : shop6 , des:"Anasayfa ekranındaki ürünlerin devamı."},
         { image : shop7 , des:"Yukarıda yer alan navbarın yönlendirdiği ürünlerin çeşit olarak sınıflandırılmasında rol oynayan sayfanın görüntüsü."},
         { image : shop8 , des:"En üst navbarda yer alan dil desteği menüsü."},
         { image : shop9 , des:"Profil ekranı bir içerik olmadığındaki görüntüsü"},
         { image : shop10 , des:"Profil ekranı içerik olduğundaki görüntüsü"},
         { image : shop11 , des:"Profil ekranının alt kısımı."},
         { image : shop12, des:"Navbar'da yazan 'ürünler' butonuna tıkladığımızda gelen tüm ürünlerin gösterildiği alan , filtreleme componentleri mevcuttur."},
         { image : shop13 , des:"Profil sahibinin siparişlerini görebildiği ekran."},
         { image : shop14 , des:"En sevilen ürünlerin görüntülendiği ekran."},
         { image : shop15 , des:"Slide menüde görüntülen ürünlerin tıklandığında yönlendirildiği tipine ve çeşidine göre sınıflandırıldığı ekran"},
         { image : shop16 , des:"Slide menüde görüntülen ürünlerin tıklandığında yönlendirildiği tipine ve ne kadar beğenildiğine göre sınıflandırıldığı ekran"},
         { image : shop17 , des:"Profil sahibinin favorilerine aldığı ürünleri görmesini sağlayan sayfanın görüntüsünün içerik eklenmemiş hali."},
         { image : shop18 , des:"Profil sahibinin favorilerine aldığı ürünleri görmesini sağlayan sayfanın görüntüsünün içerik eklenmiş hali."},
         { image : shop19 , des:"Profil sahibinin sepetine aldığı ürünleri görmesini sağlayan sayfanın görüntüsü"},
         { image : shop20 , des:"Profil sahibinin sepetine aldığı ürünleri görmesini sağlayan sayfada ödemeye yönlendiren kısım."},
         { image : shop21 , des:"Profil sahibinin sepetine aldığı ürünleri ödeyip siparişini oluşturduğu kısım."},
         { image : shop22 , des:"Yukarıda 'hakkımızda' kısmı ile ve burger-menu'deki 'iletişim' butonları ile ulaşılabilen ,iletişim sayfasının görüntüsü"},
         { image : shop23 , des:"Profil sahibinin her adresini görebileceği sayfa, eğer adres eklenmemişse boş görünür."},
         { image : shop24 , des:"Profil sahibinin yeni bir adres oluşturması için yönlendirildiği sayfa. Profil sahibi buna navbardaki menüden veya kendi profil sayfasında 'adres ekle' butonundan erişebilir."},
         { image : shop25 , des:"Ana sayfada bulunan slide menüdeki 'sizden gelenler' butonu ile erişilen , 5 yıldız almış tüm yorumların gösterildiği ekran. "},
         { image : shop26 , des:"Ana sayfada bulunan slide menüdeki 'sizden gelenler' butonu ile erişilen , 5 yıldız almış tüm yorumların gösterildiği ekranın devamı. "},
        
    ],
  },
  
    {
    id: "markdown-format",
    title: "Markdown-Format",
    description: "Kullanıcının girdiği yazıları markdown formata dönüştüren proje.",
    tech: "React, Redux  , Chakra",
    github: "https://github.com/mervehediyeozen/markdown-app",
    live: "#",
   images: [
        { image : markdown , des:"Kullanıcı yazı girişi ekranın solundadır,sağ tarafa onun markdown yazı formatı hali gelir."},
        { image : markdown1 , des:"Ekranda bulunan soru işareti kutucuğuna tıklanıldığında kutucuklar değişir ve nasıl çalıştığını gösterir."},
    ],
  },
   {
    id: "puzzle-app",
    title: "Puzzle-App",
    description: "Parçaları eş bulmaya yönlendiren basit bir puzzle projesi.",
    tech: "React, Chakra UI, ,Redux",
    github: "https://github.com/mervehediyeozen/puzzle-app",
    live: "#",
      images: [
         { image : puzzle , des:"Kurallar menüsünü kapatmak için butona basılmadığı hali."},
         { image : puzzle1 , des:"Kurallar menüsünü kapatmak için butona basıldığı hali."},
    ],
  },
   {
    id: "note-app",
    title: "Note-App",
    description: "Girilen nota arkaplan rengi verip kaydedebileceğiniz, sonra onu içeriğine göre aratabileceğiniz basit bir proje.",
    tech: "React, Chakra UI, ,Redux",
    github: "https://github.com/mervehediyeozen/genarator-app",
    live: "#",
     images: [
         { image : note , des:"Bir not eklenmeden boş hali."},
         { image : note1 , des:"Notlar eklendi."},
           { image : note2 , des:"Not eklerken alınan görüntüsü hali."},
         { image : note3 , des:"Notlar arasında arama yapılırken alınan görüntü. -1"},
           { image : note4 , des:"Notlar arasında arama yapılırken alınan görüntü. -2 "},
         
    ],
  },
   {
    id: "markdown-format",
    title: "Markdown-Format",
    description: "Kullanıcının girdiği yazıları markdown formata dönüştüren proje.",
    tech: "React, Redux  , Chakra",
    github: "https://github.com/mervehediyeozen/markdown-app",
    live: "#",
      images: [
         { image : note , des:"Bir not eklenmeden boş hali."},
         { image : note1 , des:"Notlar eklendi."},
           { image : note2 , des:"Not eklerken alınan görüntüsü hali."},
         { image : note3 , des:"Notlar arasında arama yapılırken alınan görüntü. -1"},
           { image : note4 , des:"Notlar arasında arama yapılırken alınan görüntü. -2 "},
         
    ],
  },
  {
    id: "ig-clone",
    title: "IG-Clone",
    description: "Tasarım olarak birebir instagram web sitesi tasarımını yansıtan , tasarımsal proje.",
    tech: "React, Redux  , Chakra",
    github: "https://github.com/mervehediyeozen/ig-clone",
    live: "#",
      images: [
         { image : ig , des:"Giriş ekranı."},
         { image : ig1 , des:"Anasayfa."},
         { image : ig2 , des:"Anasayfa (menü açık halde) görüntüsü."},
         { image : ig3 , des:"Anasayfada menü arama seçeneğine tıklanmış halde görüntüsü."},
         { image : ig4 , des:"Menü içeriğindeki 'bildirimler' butonuna tıklanmış ,bildirimler açık halde -anasayfada. "},
         { image : ig5 , des:"Menü içeriğindeki 'bildirimler' butonuna tıklanmış ,bildirimler açık halde -mesajlar sayfasında.  "},
         { image : ig6 , des:"Menü içeriğinde mesajlara erişmek için tıklanılması gerekilen butona tıklanmış, mesajlar sayfasındaki içeriğin görüntüsü. "},
        { image : ig7, des:"Mesaj göndermek isterken gelen modal içeriğin görüntüsü."},
         { image : ig8, des:"Menü içeriğinde keşfete erişmek için tıklanılması gerekilen butona tıklanmış, keşfet sayfasındaki içeriğin görüntüsü.  "},
         
    ],
  },
   {
    id: "youtube-clone",
    title: "Youtube-Clone",
    description: "Tasarım olarak birebir youtube web sitesi tasarımını yansıtan , tasarımsal proje.",
    tech: "React, Redux  , Chakra",
    github: "https://github.com/mervehediyeozen/youtube-clone",
    live: "#",  
     images: [
        { image : yp , des:"Anasayfa - giriş yapılmamış hali."},
        { image : yp1 , des:"Anasayfa -giriş yapılmamış ve menü butonuna basılmışken görüntüsü."},
        { image : yp3 , des:"Giriş yapma ekranı - birebir aynı tasarım olmaya özen gösterildi."},
        { image : yp4 , des:"Giriş yapma ekranı - 2. yönlendirmea aşaması. "},
        { image : yp5 , des:"Giriş yapıldıktan sonra anasayfa- siyah tema seçili."},
        { image : yp6 , des:"Temayı  değiştirmek için gereken navbardaki menünün içeriğindeki tema değiştirme butonu."},
        { image : yp7 , des:"Navbardaki menüde temanın değişmesi butonuna tıklanılması ile değişen anasayfanın beyaz tema görüntüsü."},
        { image : yp2 , des:"Anasayfada tema beyaz iken navbardaki menüye tıklanılmış hali ile görüntüsü. "},
        { image : yp8, des:"Anasayfada sidebar olan menünün açılmış hali, açılması ile 'orjinalindeki gibi' ana içerik küçülür. "},
         { image : yp22, des:"Oturum kapalı iken sidebardaki butonlarda oluşan değişikliği göstermek için alınmış görüntü. "},
        { image : yp13, des:"Anasayfadaki video içeriklerinden herhangi birine tıkladığında o videonun kendisine özel verileri ile oluşturulmuş videonun detay sayfasının görüntüsü."},
        { image : yp14 , des:"Anasayfadaki video içeriklerinden herhangi birine tıkladığında o videonun kendisine özel verileri ile oluşturulmuş videonun detay sayfasında sidemenu açık halde (orjinal youtube'da olduğu gibi anaekranda sidebar açıldığında ana içerik küçülüyor , video içeriğinin görüntülendiği sayfada ise sidebar açıldığında video içeriğinin önüne geçiyor.) "},
        { image : yp15 , des:"Anasayfadaki video içeriklerinden herhangi birine tıkladığında o videonun kendisine özel verileri ile oluşturulmuş videonun detay sayfasında yanda bulunan videoların her birinin kendine özel 'options' butonu tıklanmış haldeki görüntüsü."},
        { image : yp16 , des:"Anasayfadaki video içeriklerinden herhangi birine tıkladığında o videonun kendisine özel verileri ile oluşturulmuş videonun detay sayfasında videonun kendisine ait 'açıklama kısmı' (kısa hali - daha fazla göster butonuna tıklanmamış). "},
        { image : yp17 , des:"Anasayfadaki video içeriklerinden herhangi birine tıkladığında o videonun kendisine özel verileri ile oluşturulmuş videonun detay sayfasında videonun kendisine ait 'açıklama kısmı' (uzun hali - daha fazla göster butonuna tıklanmış). "},
        { image : yp18 , des:"Anasayfadaki video içeriklerinden herhangi birinin kanalına tıkladığında o kanalın kendisine özel verileri ile oluşturulmuş kanalın detay sayfasındaki görüntüsü."},
        { image : yp19 , des:"Anasayfadaki video içeriklerinden herhangi birinin kanalına tıkladığında o kanalın kendisine özel verileri ile oluşturulmuş kanalın detay sayfasındaki 'açıklama' kısmında 'daha fazla göster' butonuna tıklanıldığında daha uzun bir açıklama ile oluşturulan 'modal' yapısının görüntüsü. "},
        { image : yp20 , des:"Anasayfadaki video içeriklerinden herhangi birinin kanalına tıkladığında o kanalın kendisine özel verileri ile oluşturulmuş kanalın detay sayfasındaki içeriğin orta kısımının görüntüsü. "},
        { image : yp21 , des:"Anasayfadaki video içeriklerinden herhangi birinin kanalına tıkladığında o kanalın kendisine özel verileri ile oluşturulmuş kanalın detay sayfasındaki içeriğin devamının görüntüsü. "},
        { image : yp9, des:"Sidebar'da bulunan menü içeriklerindeki 'siz' butonu ile erişilen   kişinin profil sayfasının görünümü."},
        { image : yp10 , des:"Sidebar'da bulunan menü içeriklerindeki geçmiş butonu ile erişilen  geçmiş sayfa içeriğinin görüntüsü. - beyaz tema ile "},
        { image : yp11 , des:"Sidebar'da bulunan menü içeriklerindeki geçmiş butonu ile erişilen  geçmiş sayfa içeriğinin görüntüsü. - siyah tema ile"},
        { image : yp12 , des:"Sidebar'da bulunan menü içeriklerindeki playlist butonu ile erişilen ullanıcı playlistinin görüntüsü. "},
       
       
         
         
    ],
  },
 
  
 
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Box p={8}>
        <Heading>Proje bulunamadı</Heading>
        <Button mt={4} as={Link} to="/" colorScheme="teal">
          Anasayfaya Dön
        </Button>
      </Box>
    );
  }

  return (
    <Box bg="#eff2e9"  pt="20px">
    <Box maxW="1350px" mx="auto" p="50px" pt="60px" bg="#e5ebda" border="1px" borderColor="#bfc9a9">
        <Flex flexDirection="row" justifyContent="space-between">
            <Box>
      <Heading mb={4} fontWeight="light" color="#767d68">{project.title}</Heading>
      <Text mb={6} ml="10px" color="#666b5d">{project.description}</Text>
      </Box>
      <Box>
         <Text fontWeight="bold" mb={2} color="#666b5d">
        Teknolojiler:
      </Text>
      <Text mb={6} fontWeight="light" color="#767d68">{project.tech}</Text>

      <Stack direction="row" spacing={4}>
        <ChakraLink href={project.github} isExternal>
          <Button bg="#f7f7f5" color="#666b5d" _hover={{bg:"#666b5d" , color:"#f7f7f5"}} size="sm">GitHub</Button>
        </ChakraLink>
        {project.live !== "#" && project.live ? (
          <ChakraLink href={project.live} isExternal>
            <Button bg="#666b5d" size="sm" color="#f7f7f5" _hover={{bg:"#f7f7f5" , color:"#666b5d"}} >Canlı Önizleme</Button>
          </ChakraLink>
        ) : (
          <Button colorScheme="gray" isDisabled>
            Canlı Önizleme
          </Button>
        )}
      </Stack>

      <Button mt={8} as={Link} to="/" variant="link" color="#646658">
        ← Projelere Geri Dön
      </Button>
      </Box>
      </Flex>

      <Box spacing={4} mb={6} mt="20px">
        <Heading mb={4} fontWeight="light" color="#767d68" textDecoration="underline" textDecorationColor="#b8bda0" textDecorationThickness="from-font"> Proje Resimleri</Heading>
  {project.images.map((img, i) => (
    <Box bg="#b8bda0" p="40px" rounded="5px" mt="20px">
    {img.des && (
        <Text fontSize="18px" fontWeight="normal" color="white" textAlign="left">
          ( {img.des} )
        </Text>
      )}
    <VStack key={i} mt="18px">
      <Image
        src={img.image}
        alt={`${project.title} screenshot ${i + 1}`}
        borderRadius="md"
        mb={2}
      />
     
    </VStack>
     </Box>
  ))}
</Box>

     
    </Box>
    </Box>
  );
}
 