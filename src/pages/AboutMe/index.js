import { Box, Flex, Heading, Text, Link, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionLink = motion(Link);

export default function AboutMe() {
  return (
    <Box bg="#69705e">
    <MotionBox
      id="about-section"
      maxW="920px"
      mx="auto"
      bg="#f5f5f0"
      p={8}
      pb="56px"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <MotionHeading
        mb={8}
        textAlign="center"
        fontWeight="light"
        color="#69705e"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        textDecor="underline"
        textDecorationColor="#69705e"
        textDecorationThickness="from-font"
      >
        Hakkımda
      </MotionHeading>

      <Stack spacing={6} fontSize="md" color="#4f5446" lineHeight="1.7" fontWeight="light">
        {[
          "Bilgisayar Programcılığı alanında eğitim gören ve kendini sürekli geliştiren bir yazılım geliştiricisiyim. Eskişehir Teknik Üniversitesi’nde Bilgisayar Programcılığı bölümünde öğrenimimi tamamladım ve staj sürecim için aktif olarak fırsatlar arıyorum.",
          "Bunun öncesinde lisede Ömer Seyfettin Sağlık Meslek Lisesi’nden mezun oldum ve lise dönemimde 2018 Eylül - 2019 Haziran tarihleri arasında Buca Toplum Sağlığı Merkezi’nde sağlık teknikeri olarak staj yaptım. Bu deneyim, disiplin ve sorumluluk bilincimi güçlendirdi.",
          "JavaScript, C#, Python, PHP (başlangıç-orta seviyede); SQL ve MySQL temel bilgisi; HTML5, CSS3 (ileri seviye), React, Redux, Context API; Chakra UI, Bootstrap; Visual Studio Code; Docker ve Kubernetes temel eğitimi.",
          "Eskişehir Teknik Üniversitesi, Bilgisayar Programcılığı  Açıköğretim Fakültesi, Web Tasarımı ( devam ediyor); Patika.dev platformunda 2 seviye bootcamp tamamlama; İleri seviye JavaScript eğitimi (devam ediyor); Web teknolojileri üzerine 3 sertifika.",
          "İngilizce: C1 (İleri orta seviye); İspanyolca: A1 (Başlangıç seviyesi)",
          "HackerRank ve npmjs.com platformlarında aktif kullanıcı; GitHub profilim üzerinden çeşitli projelerimi inceleyebilirsiniz; Staj ve kariyer hedeflerime yönelik aktif bir öğrenme ve gelişim sürecindeyim.",
        ].map((text, i) => (
          <MotionText
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          >
            {text}
          </MotionText>
        ))}
        <Flex justifyContent="center">
        <Box
          p={4}
         justifySelf="center"
          borderRadius="md"
          boxShadow="md"
          maxW="400px"
          mx="auto"
          mt={8}
          cursor="default"
          _hover={{ boxShadow: "xl", transform: "scale(1.03)", transition: "all 0.3s" }}
        >
          <MotionHeading
            as="h3"
            size="md"
            mb={3}
            color="#69705e"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            textAlign="center"
            fontWeight="light"
           
          >
            İletişim
          </MotionHeading>
          <Stack spacing={2} textAlign="center" color="#525b4a" fontWeight="normal">
            <MotionLink
              href="mailto:mervehediyeozen98@gmail.com"
              color="#69705e"
              textDecoration="underline"
              textDecorationThickness="from-font"
              isExternal
              whileHover={{ scale: 1.1, color: "#4a513d" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              mervehediyeozen98@gmail.com
            </MotionLink>
            <MotionLink
              href="tel:+905530846947"
              color="#69705e"
              textDecoration="underline"
               textDecorationThickness="from-font"
              isExternal
              whileHover={{ scale: 1.1, color: "#4a513d" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              +90 553 084 6947
            </MotionLink>
          </Stack>
        </Box>
        </Flex>
      </Stack>
    </MotionBox>
    </Box>
  );
}
