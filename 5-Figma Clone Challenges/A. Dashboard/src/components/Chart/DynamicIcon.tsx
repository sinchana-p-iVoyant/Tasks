import React from 'react';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';

const DynamicIcon = ({ icon, size = 18, style = {} }) => {
  const iconMap = {
    bitcoin: FaBitcoin,
    ethereum: FaEthereum,
    // Add more icons as needed
  };

  const SelectedIcon = iconMap[icon] || FaBitcoin;

  return (
    <SelectedIcon size={size} style={{ color: "white", ...style }} />
  );
};