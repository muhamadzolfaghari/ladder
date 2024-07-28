import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import googleicon from "../../public/icons/google-icon.svg";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import {
  Box,
  IconButton,
  ListItemIcon,
  MenuItem,
  MenuList,
  SvgIcon,
  Typography,
  Menu,
  Popover,
} from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import ShortTextIcon from '@mui/icons-material/ShortText';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import NotesIcon from '@mui/icons-material/Notes';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import flag from "../../public/icons/flag.svg";

interface CopyToClipboardProps {
  text: string;
}

function GeminiTools({ text }: CopyToClipboardProps) {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [menu, setMenu] = useState<string | null>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>, menuName: string) => {
    setMenuAnchorEl(event.currentTarget);
    setMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Box
      width={50}
      gap={4}
      sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}
      alignContent="center"
    >
      <IconButton onClick={handleCopy}>
        <ContentCopyOutlinedIcon />
      </IconButton>
      <Box alignItems="center" display="flex">
        <Link href="/" passHref>
          <Image width={24} height={24} src={googleicon.src} alt="G-MAIL" />
        </Link>
      </Box>
      <Box>
        <IconButton
          onClick={(event) => openMenu(event, 'tune')}
          aria-controls={menu === 'tune' ? 'tune-menu' : undefined}
          aria-haspopup="true"
        >
          <TuneOutlinedIcon sx={{ transform: "rotate(90deg)" }} />
        </IconButton>
        <Popover
          id="tune-menu"
          anchorEl={menuAnchorEl}
          open={menu === 'tune'}
          onClose={() => setMenu(null)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <MenuList>
            <MenuItem onClick={() => setMenu(null)}>
              <ListItemIcon>
                <ShortTextIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Shorter</Typography>
            </MenuItem>
            <MenuItem onClick={() => setMenu(null)}>
              <ListItemIcon>
                <NotesIcon fontSize="small"/>
              </ListItemIcon>
              <Typography variant="inherit">Longer</Typography>
            </MenuItem>
            <MenuItem onClick={() => setMenu(null)}>
              <ListItemIcon>
                <DownloadDoneIcon fontSize="small"/>
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
              Simpler
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => setMenu(null)}>
              <ListItemIcon>
                <BeachAccessOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
              Less formal
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => setMenu(null)}>
              <ListItemIcon>
                <WorkOutlineOutlinedIcon fontSize="small"/>
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
              professional
              </Typography>
            </MenuItem>
          </MenuList>
        </Popover>
      </Box>
      <Box>
        <IconButton
          onClick={(event) => openMenu(event, 'share')}
          aria-controls={menu === 'share' ? 'share-menu' : undefined}
          aria-haspopup="true"
        >
          <ShareOutlinedIcon />
        </IconButton>
        <Popover
          id="share-menu"
          anchorEl={menuAnchorEl}
          open={menu === 'share'}
          onClose={() => setMenu(null)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <MenuList>
            <MenuItem onClick={() => setMenu(null)}>
              <ListItemIcon>
                <FeedOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Export to document</Typography>
            </MenuItem>
            <MenuItem onClick={() => setMenu(null)}>
              <ListItemIcon><EmailOutlinedIcon fontSize="small"/></ListItemIcon>
              <Typography variant="inherit">Draft in Gmail</Typography>
            </MenuItem>
          </MenuList>
        </Popover>
      </Box>
      <IconButton>
        <Image src={flag.src} width={24} height={24} alt="flag" />
      </IconButton>
    </Box>
  );
}

export default GeminiTools;
