import React, { useState } from "react";
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
  // Text,
  // Popover,
  // PopoverTrigger,
  // PopoverContent,
  // PopoverBody,
  // GridItem,
  Collapse,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DropDownMenu = ({ mainmenu, submenulist }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link as={RouterLink} to={mainmenu.link}>{mainmenu.name}</Link>
      <Collapse in={isOpen} animateOpacity>
        <Box
          display={isOpen ? 'block' : 'none'}
          position="absolute"
          transform="translateX(-35%)"
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
      </Collapse>
    </Box>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown in Drawer
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleClose = () => {
    onClose();       // Drawer 닫기
    closeDropdown(); // Dropdown 닫기
  };

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
              <DropDownMenu mainmenu={{ name: t('앱') }} submenulist={[{ name: t('ChainTalk'), link: '/chaintalk' }, { name: t("Gray"), link: '/gray' }]} />
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
              <Link color="black" as={RouterLink} to="/" fontSize={18} onClick={handleClose} display="block" my={2} mt={5}>
                {t("홈")}
              </Link>
              <Link color="black" as={RouterLink} to="/about_us" fontSize={18} onClick={handleClose} display="block" my={2} mt={5}>
                {t("소개")}
              </Link>
              <Link color="black" as="button" fontSize={18} onClick={toggleDropdown} my={2} mt={5} width="100%">
                <Flex justifyContent="space-between" alignItems="center" width="100%">
                  {t("앱")}
                  {dropdownOpen ? (
                    <ChevronUpIcon boxSize={5} />
                  ) : (
                    <ChevronDownIcon boxSize={5} />
                  )}
                </Flex>
              </Link>
              <Collapse in={dropdownOpen} animateOpacity>
                <VStack align="start" spacing={2} pl={4}>
                  <Link color="black" as={RouterLink} to="/chaintalk" fontSize={16} onClick={handleClose}>
                    - {t("ChainTalk")}
                  </Link>
                  <Link color="black" as={RouterLink} to="/gray" fontSize={16} onClick={handleClose}>
                    - {t("Gray")}
                  </Link>
                </VStack>
              </Collapse>
              <Link color="black" as={RouterLink} to="/members" fontSize={18} onClick={handleClose} display="block" my={2} mt={5}>
                {t("멤버")}
              </Link>
              <Link color="black" as={RouterLink} to="/donation" fontSize={18} onClick={handleClose} display="block" my={2} mt={5}>
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
