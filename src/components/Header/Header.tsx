import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
// import surfLogo from "../../assets/pngs/surf-logo.png";
import mLogo from "../../assets/pngs/surfcity-new-logo.png";
import burger from "../../assets/pngs/burger-menu.png";

const pages = [
  { id: 0, name: "Home", path: "/" },
  { id: 1, name: "About", path: "/about" },
  { id: 2, name: "Services", path: "/services" },
  { id: 3, name: "Gallery", path: "/gallery" },
  { id: 4, name: "Book", path: "/book" },
  // { id: 5, name: "Contact", path: "/contact-us" },
];

const MenuItemBox = styled(Box)`
  // font-family: "Gotham";
  text-transform: uppercase;
  color: #67d0f2;
`;

const MenuItemBoxDesk = styled(Box)`
  // font-family: "Gotham";
  text-transform: uppercase;
`;

const MenuBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const MobileLogo = styled(Box)`
  text-align: center;
  & > rect {
    width: 104;
    height: 58;
  }
`;

const MobileHead = styled(Box)`
  @media screen and (min-width: 860px) {
    display: none;
  }
  @media screen and (max-width: 860px) and (min-width: 0px) {
    display: block;
  }
`;

const DesktopHead = styled(Box)`
  @media screen and (min-width: 0) {
    display: none;
  }
  @media screen and (min-width: 860px) {
    display: block;
  }
  @media screen and (max-width: 1060px) and (min-width: 860px) {
    display: block;
  }
`;

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path?: string) => {
    setAnchorElNav(null);
  };

  return (
    // <AppBar position="static">
    <>
      <MobileHead>
        <Grid container alignItems="center" py={2}>
          <Grid item sm={2} xs={2}>
            <Box color="#ffffff">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <Image src={burger} alt="surf-city" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page?.id} onClick={handleCloseNavMenu}>
                    <MenuItemBox>
                      <Typography textAlign="center">
                        <Link href={page?.path}>{page?.name}</Link>
                      </Typography>
                    </MenuItemBox>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
          <Grid item sm={8} xs={8}>
            <MobileLogo>
              <Image src={mLogo} alt="surf-city" width={94} height={91} />
            </MobileLogo>
          </Grid>
          <Grid item sm={2} xs={2}></Grid>
        </Grid>
      </MobileHead>
      <DesktopHead>
        <Grid container alignItems="center" py={2}>
          <Grid item sm={4} xs={6} pl={3}>
            <Image src={mLogo} alt="surf-city" width={114} height={101} />
          </Grid>
          <Grid item sm={8} xs={6}>
            <Box>
              <MenuBox>
                {pages.map((page) => (
                  <MenuItemBoxDesk
                    key={page?.id}
                    sx={{
                      color: "white",
                      fontSize: 16,
                      paddingRight: 4,
                      letterSpacing: 2,
                    }}
                  >
                    <Link href={page?.path}>{page?.name}</Link>
                  </MenuItemBoxDesk>
                ))}
              </MenuBox>
            </Box>
          </Grid>
        </Grid>
      </DesktopHead>
    </>
  );
};
export default Header;
