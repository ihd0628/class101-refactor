import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { BsTwitter } from 'react-icons/bs';
import { FiLink2 } from '@react-icons/all-files/fi/FiLink2';

function ShareModal({ setIsShareModal }) {
  const closeModal = () => {
    setIsShareModal(prev => !prev);
  };

  const url = window.location.href;

  const linkCopy = async () => {
    await navigator.clipboard.writeText(url.slice(0, 38));
    closeModal();
  };

  return (
    <Container>
      <FlexSpace>
        <Title>공유하기</Title>
        <ShareXBtn onClick={closeModal}>
          <AiOutlineClose
            size="20"
            style={{ position: 'relative', top: '-10px' }}
          />
        </ShareXBtn>
      </FlexSpace>
      <Flex>
        <Icon1>
          <RiKakaoTalkFill
            size="35"
            style={{ position: 'relative', top: '6px', left: '6px' }}
          />
        </Icon1>
        <Icon2>
          <BsTwitter
            size="28"
            style={{
              position: 'relative',
              top: '9px',
              left: '10px',
              color: 'white',
            }}
          />
        </Icon2>
        <Icon3>
          <AiFillFacebook
            size="28"
            style={{
              position: 'relative',
              top: '10px',
              left: '11px',
              color: 'white',
            }}
          />
        </Icon3>
        <LinkCopyBtn onClick={linkCopy}>
          <FiLink2 size="20" style={{ position: 'relative', top: '-1px' }} />
          <p>링크 복사하기</p>
        </LinkCopyBtn>
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  width: 480px;
  height: 160px;
  padding: 30px;
  background-color: white;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
`;

const ShareXBtn = styled.button`
  background: none;
  cursor: pointer;
`;

const Flex = styled.div`
  ${props => props.theme.variables.flex('', 'left', '')}
  gap: 50px;
`;

const FlexSpace = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')}
`;

const Icon1 = styled.div`
  width: 48px;
  height: 48px;
  background-color: #ffe812;
  border-radius: 50%;
`;

const Icon2 = styled(Icon1)`
  background-color: #55acee;
`;

const Icon3 = styled(Icon1)`
  background-color: #3b5998;
`;

const LinkCopyBtn = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 128px;
  height: 48px;
  gap: 5px;
  background-color: #f8f8f8;
  border-radius: 25px;
  cursor: pointer;

  p {
    font-size: 12px;
  }
`;

export default ShareModal;
