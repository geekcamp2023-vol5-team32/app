import {
  Box,
  Image,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
} from "@chakra-ui/react";

import { useState } from "react";

import { css } from "@emotion/react";

import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Box display={"flex"} alignItems={"center"} backgroundColor={"black"}>
        <Image
          src="/liscript/img/icon.png"
          css={css`
            width: 120px;
            height: 14vh;
            flex-shrink: 0;

            @media (max-width: 768px) {
              width: 100px;
              height: 12vh;
            }
          `}
        ></Image>
        <Box
          css={css`
            color: #07cc2a;
            font-size: 55px;
            font-weight: 900;
          `}
        >
          Liscript
        </Box>
        <Spacer></Spacer>
        <IconButton 
          width="85px"
          height="80px"
          aria-label='Search database'
          colorScheme='blackAlpha'
          variant='solid' 
          onClick={onOpen}
          icon={
            <Image 
              src="/liscript/img/menu.png" 
              css={css`
                width: 85px;
                height: 80px;
                margin-right:2%;
                filter: invert(88%) sepia(61%) saturate(0%) hue-rotate(229deg) brightness(107%) contrast(101%);
                }
              `}
            />
          } 
        />
        <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
          <ModalOverlay />
          <ModalContent
            position="fixed"
            top="0"
            right="5"
            bottom="0"
            width="400px"
            height="95vh"
            display="flex"
            flexDirection="column"
            justifyContent="stretch"
            alignItems="stretch"
          >
            <ModalHeader>
              <Link
                href="/"
                css={{
                  "&:hover": { color: "blue" },
                }}
              >
                Liscript
              </Link>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
              flex="0"
              css={{
                marginTop: "20px",
                backgroundColor: "lightgray",
                "&:hover": { color: "blue" },
              }}
            >
              <Link href="/member">開発メンバー</Link>
            </ModalBody>
            <ModalBody
              flex="0"
              css={{
                marginTop: "20px",
                backgroundColor: "lightblue",
                "&:hover": { color: "blue" },
              }}
            >
              <Link href="/describe">Liscriptとは</Link>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
