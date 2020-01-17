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

export function PersonalInfo(props) {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Box width="90%" mx="auto">
            <Grid container spacing={6}>
                <Grid item xs={2}>
                            <Avatar alt="Remy Sharp" src="" className={classes.small}/>
                </Grid>
                <Grid item xs={8}>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="caption" color="primary">minha conta</Typography>
                </Grid>
            </Grid>
        </Box>
        <Box width="90%" mx="auto" pt={3} mb={3}>  
            <Grid container spacing={1}>
                
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item xs zeroMinWidth>
                          <Typography style={{ marginLeft: 10 }} variant="button" color="primary">
                              <b>Nome</b>
                          </Typography>
                          <Typography style={{ marginLeft: 10 }} variant="subtitle1" color="primary">
                              João Silva Silva
                          </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item xs zeroMinWidth>
                          <Typography style={{ marginLeft: 10 }} variant="button" color="primary">
                              <b>Data de Nascimento</b>
                          </Typography>
                          <Typography style={{ marginLeft: 10 }} variant="subtitle1" color="primary">
                              14 de abril de 1996
                          </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item xs zeroMinWidth>
                          <Typography style={{ marginLeft: 10 }} variant="button" color="primary">
                              <b>Gênero</b>
                          </Typography>
                          <Typography style={{ marginLeft: 10 }} variant="subtitle1" color="primary">
                              Masculino
                          </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>


                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                      <Grid item xs zeroMinWidth>
                          <Typography style={{ marginLeft: 10 }} variant="button" color="primary">
                              <b>Estado</b>
                          </Typography>
                          <Typography style={{ marginLeft: 10 }} variant="subtitle1" color="primary">
                              Distrito Federal, Brasília
                          </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
            </Grid>
        </Box>
      </div>
    )
  }
