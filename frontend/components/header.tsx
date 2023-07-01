import { Box, Image, Spacer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";

import { useState } from "react";

import { css } from "@emotion/react";

export function Header() {

  const [isOpen, setIsOpen] = useState(false);
  
    const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Box display={"flex"} alignItems={"center"} backgroundColor={"#E6F6D6"}>
        <Image src="/liscript/img/icon.png" css={css`
          width: 120px;
          height: 14vh;
          flex-shrink: 0;
          
          @media (max-width: 768px) {
            width:100px;
            height: 12vh;
        }
        `}></Image>
        <Box css={css`
          color: #07cc2a;
          font-size: 55px;
          font-weight: 900;
        `}>Liscript</Box>
        <Spacer></Spacer>
        <Image src="/liscript/img/menu.png" css={css`
        width: 85px;
        height: 80px;
        margin-right:2%;
        `}
          onClick={onOpen}></Image>
        
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
          <ModalHeader>サイドバー</ModalHeader>
          <ModalCloseButton />
          <ModalBody flex="1">
              開発メンバー
            </ModalBody>
            <ModalBody flex="1">
              このプロダクトを作ったきっかけ
              </ModalBody>
            <ModalBody flex="1">
              開発期間、技術選定
              </ModalBody>
        </ModalContent>
      </Modal>



      </Box>
    </>
  );
}