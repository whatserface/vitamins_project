import { Button, ButtonProps } from "@mui/material";

interface VitaminLinkProps extends ButtonProps {
  name: string;
}

export default function VitaminLink({ name, ...props }: VitaminLinkProps) {
  return (
    <Button variant="outlined" color="secondary" {...props}>
      Витамин {name}
    </Button>
  );
}
