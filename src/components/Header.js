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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  GridItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DropDownMenu = ({ mainmenu, submenulist }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Popover isOpen={isOpen}>
        <PopoverTrigger>
          <Link as={RouterLink} to={mainmenu.link}>
            {mainmenu.name}
          </Link>
        </PopoverTrigger>
        <PopoverContent w="100vw" borderRadius="none" border="none" top={-1} bg="teal.500">
          <PopoverBody justify={'center'} align={'center'}>
              {
                submenulist.map((item) => {
                  return (
                    <GridItem key={item.id}>
                      <Link as={RouterLink} to={item.link} key={item.name}>
                        {item.name}
                      </Link>
                    </GridItem>
                  )
                })
              }
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

const DropDownMenu2 = ({ mainmenu, submenulist }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link as={RouterLink}  to={mainmenu.link}>{mainmenu.name}</Link>
      <Box
        display={isOpen ? 'block' : 'none'}
        position="absolute"
        transform="translateX(-25%)"
        background="blue.800"
        zIndex="1000"
      >
        {submenulist.map((submenu) => (
          <Link
            as={RouterLink} 
            key={submenu.name}
            _hover={{ bg: 'gray.500' }}
            to={submenu.link}
            display="block"
            py={2}
            px={4}
          >
            {submenu.name}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

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
        <Flex fontSize={20} fontWeight="bold" display={{ base: 'none', md: 'flex' }} >
          <VStack marginTop={6} align="end">
            <HStack>
              <Link as={RouterLink} to="/" mx={2}>
                {t('홈')}
              </Link>
              <Link as={RouterLink} to="/about_us" mx={2}>
                {t('소개')}
              </Link>
              <Link as={RouterLink} to="/product" mx={2}>
                {t('제품')}
              </Link>
              <DropDownMenu mainmenu={{ name: t('제품2'), link: '/product' }} submenulist={[{ name: t('Chaintalk'), link: '/chaintalk' }]} />
              <DropDownMenu2 mainmenu={{ name: t('제품3'), link: '/product' }} submenulist={[{ name: t('Chaintalk'), link: '/chaintalk' }]} />
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
          _hover={{
            bg: "#2a3645", // 마우스 오버 시 배경색
            borderColor: "#f08050", // 마우스 오버 시 테두리 색
          }}
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
            <Flex justify="end" fontSize={15} marginRight={2}>
              {
                i18n.language === 'en' ?
                  (<button onClick={() => changeLanguage('kr')} style={{ color: 'black' }}>{t('한국어')}</button>) :
                  (<button onClick={() => changeLanguage('en')} style={{ color: 'black' }}>{t('english')}</button>)
              }
            </Flex>
            <DrawerBody>
              <Link color="black" as={RouterLink} to="/" fontSize={18} onClick={onClose} display="block" my={2} mt={5}>
                {t("홈")}
              </Link>
              <Link color="black" as={RouterLink} to="/about_us" fontSize={18} onClick={onClose} display="block" my={2} mt={5}>
                {t("소개")}
              </Link>
              <Link color="black" as={RouterLink} to="/product" fontSize={18} onClick={onClose} display="block" my={2} mt={5}>
                {t("제품")}
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
