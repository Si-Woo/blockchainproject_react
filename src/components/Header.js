import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Image,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // store the selected language in local storage
  };


  return (
    <Box as="header" color="white">
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={5} mb={-1}>
        <Link as={RouterLink} to="/" onClick={onClose}>
          <Image src={require("../images/logo.png")} width={200} />
        </Link>
        <Flex fontSize={20} fontWeight="bold" display={{ base: 'none', md: 'flex' }}>
          <VStack marginTop={6} align="end">
            <HStack>
              <Link as={RouterLink} to="/" mx={2}>
                {t('홈')}
              </Link>
              <Link as={RouterLink} to="/about_us" mx={2}>
                {t('소개')}
              </Link>
              <Link as={RouterLink} to="/members" mx={2}>
                {t('멤버')}
              </Link>
              <Link as={RouterLink} to="/donation" mx={2}>
                {t('도네이션')}
              </Link>
            </HStack>
            <Flex justify="end" fontSize={15} marginRight={2}>
              {
                i18n.language === 'en' ?
                  (<button onClick={() => changeLanguage('kr')}>{t('한국어')}</button>) :
                  (<button onClick={() => changeLanguage('en')}>{t('english')}</button>)
              }
            </Flex>
          </VStack>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          bg="#1e242f"
          borderColor="#ec6437"
          borderWidth="2px"
          icon={<HamburgerIcon color='#c8d9df' />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <Flex align="center" bg="#1e242f" p={2}>
              <Image src={require("../images/logo.png")} alt="Drawer Icon" width={200} marginLeft={3} />
            </Flex>
            <Box bg="#ec6437" height="3px" width="100%" />
            <DrawerBody>
              <Link color="black" as={RouterLink} to="/" fontSize={18} onClick={onClose} display="block" my={2} mt={5}>
                {t("홈")}
              </Link>
              <Link color="black" as={RouterLink} to="/about_us" fontSize={18} onClick={onClose} display="block" my={2} mt={5}>
                {t("소개")}
              </Link>
              <Link color="black" as={RouterLink} to="/members" fontSize={18} onClick={onClose} display="block" my={2} mt={5}>
                {t("멤버")}
              </Link>
              <Link color="black" as={RouterLink} to="/donation" fontSize={18} onClick={onClose} display="block" my={2} mt={5}>
                {t("도네이션")}
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      <Box bg="#ec6437" height="3px" width="100%" mt={1} />
    </Box>
  );
};

export default Header;
