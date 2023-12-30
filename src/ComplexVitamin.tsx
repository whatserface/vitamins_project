import { Menu, MenuItem, Fade } from "@mui/material";
import { useState } from "react";
import VitaminLink from "./VitaminLink";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function ComplexVitamin({
  mainName,
  variants,
}: {
  mainName: string;
  variants: string[];
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <VitaminLink
        id="fade-button"
        name={mainName}
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ArrowDownwardIcon />}
      />
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {variants.map((variant) => (
          <MenuItem onClick={handleClose}>Витамин {variant}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
