import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DrawerComp from "./DrawerComp";
import logo from '../images/Tutedude.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
 
  return (
    <React.Fragment>
      <AppBar sx={{ background: 'white'}}>
        <Toolbar>
          <img src='https://www.tutedude.com/refundassets/Tutedude.png' width={150} height={50} sx={{ transform: "scale(2)" ,color:'purple'}}/>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" ,color:'purple'}} /> */}
          tutude
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto",color: '#800080' }}
                // indicatorColor="re"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab  label="My Assignment" />
                <Tab label="Chat with mentor" />
               <div  sx={{ marginTOP: "50px"}}>
               <AccountCircleIcon sx={{ marginTOP: "50px"}}/>
                 <KeyboardArrowDownIcon/></div>
                 
               
              </Tabs>
             
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;