import React from 'react';
import sprite from '../assets/sprite.svg';

type SpriteProps = {
  iconid: string;
}


export const Sprite = (props : SpriteProps) => {
  return (
    <>
      <svg  version="1.1">
        <use xlinkHref={`${sprite}#${props.iconid}`} />
      </svg>
    </>
  )
}
