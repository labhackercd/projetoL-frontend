import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import 'typeface-roboto';

let theme = createMuiTheme({
    palette: {
        primary: { main: '#4B4D52' },
    },
    typography: {
        fontStyle:'typeface-roboto',
        subtitle1: {
            //fontSize: 12,
        },
        body1: {
            //fontWeight: 350,
            fontStyle:'bold'
        },
        button: {
            fontStyle: 'italic',
        },
        h6:{
            //fontSize:25
        }
    },
});

theme = responsiveFontSizes(theme);


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  }))

export function ProfileCard(props) {
    const classes = useStyles();

    return (
        <Box width="60%" mx="auto" pt={3}>
            <Grid container spacing={6}>
                <ThemeProvider theme={theme}>
                    <Grid item xs={4}>
                        <Box display="flex" alignItems="center">
                            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/500" className={classes.large}/>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6" color="primary">
                            João Silva
                        </Typography>
                        <Typography variant="body1" color="primary">
                            Último Acesso: <br></br> 14/01/2020
                        </Typography>
                    </Grid>
                </ThemeProvider>
            </Grid>
        </Box>
    )
  }
