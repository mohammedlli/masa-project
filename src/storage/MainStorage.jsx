import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
export default function MainStorage(){
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
        };

        const [bi, setbi] = React.useState(false);

        const handleClickBi = () => {
            setbi(!bi);
            };
            const [prog, setprog] = React.useState(false);

            const handleClickprog = () => {
                setprog(!prog);
                };
    
        return<>
        <div className='main-store'>
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' 
        ,boxShadow:"0 0 3px 0px black",borderRadius:"10px" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
        <Link to='/dashbord/m.c'style={{color:"#212A3E",textDecoration:"none"}}>
            <ListItemButton>
                <ListItemText
                
                primary="M.C"/>
            </ListItemButton>
        </Link>
        <Link to='/dashbord/b.c' style={{color:"#212A3E",textDecoration:"none"}}>
        <ListItemButton>
            <ListItemText primary="B.C" />
        </ListItemButton>
        </Link>
        <ListItemButton onClick={handleClick}>
            <ListItemText primary="PH." />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="M.C" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="B.C" />
                </ListItemButton>
            </List>
        </Collapse>

        <ListItemButton onClick={handleClickBi}>
            <ListItemText primary="Biofcn" />
            {bi ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={bi} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="MC" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="BC" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Ph.MC" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Ph.BC" />
                </ListItemButton>
            </List>
        </Collapse>

        <ListItemButton onClick={handleClickprog}>
            <ListItemText primary="progressive" />
            {prog ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={prog} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="MC" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="BC" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Ph.MC" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Ph.BC" />
                </ListItemButton>
            </List>
        </Collapse>
    </List>
    </div>
    </>
}







