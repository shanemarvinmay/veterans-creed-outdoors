import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Facebook, FacebookRounded } from '@mui/icons-material';

export default function Nav() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Veteran's Creed Outdoors
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => window.open('https://www.facebook.com/VCOOutdoors/')}
                    >
                        {/* <Facebook /> */}
                        <FacebookRounded />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
