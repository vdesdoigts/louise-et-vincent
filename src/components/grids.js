import React from 'react';
import { Flex } from 'rebass';

const getWidth = width => {
  if (!width) {
    return `auto`;
  }

  const widths = [];

  if (!Array.isArray(width)) {
    return `0 0 ${width * 100}%`;
  }

  width.forEach(value => {
    widths.push(`0 0 ${value * 100}%`);
  });

  return widths;
};

export const Grid = ({ ml, flexWrap, ...others }) => <Flex ml={ml || -4} flexWrap={flexWrap || 'wrap'} {...others} />;

export const Col = ({ width, flex, pl, ...others }) => <Flex pl={pl || 4} flex={flex || getWidth(width)} {...others} />;