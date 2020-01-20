import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {withStyles } from "@material-ui/core";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

import FolderIcon from '@material-ui/icons/Folder';

import { palette } from '@material-ui/system';


import 'typeface-roboto';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#4B4D52' },
    },
    typography: {
        fontStyle:'typeface-roboto',

        subtitle1: {
            fontSize: 14,
            
        },
        body1: {
            fontWeight: 500,
        },
        button: {
          fontStyle: 'italic',
          marginLeft: 16
        },
    },
  });
  
const StyledListItem = withStyles({
  root: {
    backgroundColor: "#FAF9F9",
  },
})(ListItem);

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
    },
    paper: {
      margin: `${theme.spacing(1)}px auto`,
      backgroundColor: '#FAF9F9'
    },
    small: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      marginTop:'10px'
    },
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  }))

export function WikilegisCard(props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Box width="90%" mx="auto">
            <Grid container spacing={6}>
                <Grid item xs={2}>
                    <Avatar alt="Remy Sharp" src="" className={classes.small}/>
                </Grid>
                <Grid item xs={10}>
                    <Box display="flex" justifyContent="flex-end" pt={2}>
                        <Typography variant="caption" display="inline" color="primary" align="right">histórico</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box width="90%" mx="auto" pt={3} mb={3}>  


        </Box>
      </div>
    )
  }
