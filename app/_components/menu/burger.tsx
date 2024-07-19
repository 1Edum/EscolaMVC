import React from 'react';

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Bar: React.FC = () => (
  <div className="w-8 h-2 bg-bgprimary rounded mb-1"></div>
);

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => (
  <div
    className="cursor-pointer flex flex-col z-20 md:hidden"
    onClick={() => setOpen(!open)}
  >
    <Bar />
    <Bar />
    <Bar />
  </div>
);

export default Burger;
