import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';


// Animação de gradiente
const gradientAnimation = keyframes`
  0% {
    outline-color: #ffffff;
    background-position: 0% 50%;
  }
  50% {
    outline-color: gray;
    background-position: 100% 50%;
  }
  100% {
    outline-color: #f0f0f0;
    background-position: 0% 50%;
  }
`;

// Estilo da imagem
const Image = styled.img`
  ${tw`rounded-full w-1/2 h-auto`}
  max-width: 100%;
  background: linear-gradient(90deg, #ffffff, #FF6347); 
  outline: 4px solid transparent; 
  outline-offset: 7px;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientAnimation} 5s linear infinite;
`;

// Estilo da coluna da foto
const ColumnPhoto = styled.div`
  ${tw`w-full`}
`;

// Componente BannerPhoto
const BannerPhoto: React.FC = () => {

  const  ImageSrc = require('../../assets/images/AboutMe/profile-pic.webp') as string;

  return (
    <ColumnPhoto>
      <Image
        src={ImageSrc}
        alt="LuanPhoto"
        loading="lazy"
        width="100%" 
        height="auto"
      />
    </ColumnPhoto>
  );
};

export default BannerPhoto;
