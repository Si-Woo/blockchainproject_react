import React from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Image,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" color="white">
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={5} mb={-6}>
        <Link as={RouterLink} to="/" onClick={onClose}>
          <Image src={require("../images/logo.png")} width={200} />
        </Link>
        <Flex fontSize={20} fontWeight="bold" display={{ base: 'none', md: 'flex' }}>
          <Link as={RouterLink} to="/" mx={2}>
            홈
          </Link>
          <Link as={RouterLink} fontWeight="bold" to="/members" mx={2}>
            멤버
          </Link>
          <Link as={RouterLink} fontWeight="bold" to="/donation" mx={2}>
            도네이션
          </Link>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>
      <Flex justify="end" fontSize={15} marginRight={5} display={{ base: 'none', md: 'flex' }}>
          <Link as={RouterLink} to="/" mx={2}>
            한국어
          </Link>
          <Text>|</Text>
          <Link as={RouterLink} to="/en" mx={2}>
            ENG
          </Link>
          {/* <Text>|</Text>
          <Link as={RouterLink} to="/donation" mx={2}>
            일본어
          </Link> */}
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
                홈
              </Link>
              <Link color="black" as={RouterLink} to="/members" fontSize={18} onClick={onClose} display="block" my={2} mt={5}>
                멤버
              </Link>
              <Link color="black" as={RouterLink} to="/donation" fontSize={18} onClick={onClose} display="block" my={2} mt={5}>
                도네이션
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
