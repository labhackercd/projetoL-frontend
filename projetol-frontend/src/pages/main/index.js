import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import Typography from '@material-ui/core/Typography';

import {ProfileCard} from '../../components/main/profile_card'
import {PersonalInfo} from '../../components/main/personal_info'
import WikilegisCard from '../../components/main/wikilegis'
import PautaParticipativaCard from '../../components/main/pauta'
import InterativasCard from '../../components/main/interativas'

import { Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Image from 'material-ui-image'
import banner from './banner.svg';
import { green, blue } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import SettingsIcon from '@material-ui/icons/Settings';

class Main extends React.Component {
    

    render() {
      const classes = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(6),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
        imageIcon: {
          height: '150%',
          width:'auto'
        },
        iconRoot: {
          textAlign: 'center'
        }
        
      }));

      const theme = createMuiTheme({
        palette: {
            primary: { main: '#4B4D52' },
        },
        typography: {
            fontFamily:'typeface-roboto',
            subtitle1: {
                fontSize: 12,
            },
            body1: {
                fontWeight: 500,
            },
            button: {
                fontStyle: 'italic',
            },
            h4:{
              fontWeight:300,
              fontSize:'18px',
            }
        },
      });

      return (
        
        <div className={classes.root}>
          <ThemeProvider theme={theme}>
              <Box width="90%" mx="auto">
                <Grid container spacing={5}>
                    <Grid item xs={3}>
                        <Box pt={5}><ProfileCard></ProfileCard></Box>
                    </Grid>
                    <Grid item xs={9}>
        
                          <Box display="flex" justifyContent="center" width={1}>
                            <img src={banner} style={{ height: "100%", width: "100%"}}/>
                          </Box>

                    </Grid>
                </Grid>
              </Box>
              <Box width="90%" mx="auto" pt={10}>
                <Grid container spacing={5}>
                    <Grid item xs={3}>
                          <Grid container>
                              <Box display="flex" justifyContent="flex-start">
                                <Grid item><Typography color="primary" variant="h5">Informações Pessoais</Typography></Grid>
                                <Grid item><IconButton aria-label="help" size="small"><HelpOutlineIcon /></IconButton></Grid>                            
                              </Box>
                          </Grid>
                      </Grid>
                      <Grid item xs={8}>
                          <Grid container>
                              <Box display="flex" justifyContent="flex-start">
                                <Grid item><Typography color="primary" variant="h5">Suas últimas participações</Typography></Grid>
                                <Grid item><IconButton aria-label="help" size="small"><HelpOutlineIcon /></IconButton></Grid>                            
                              </Box>
                          </Grid>
                      </Grid>
                      <Grid item xs={1}>
                          <Grid container>
                              <Box display="flex" justifyContent="flex-end">
                                <Grid item><IconButton aria-label="help" size="small"><SettingsIcon /></IconButton></Grid>                            
                              </Box>
                          </Grid>
                      </Grid>
                      <Grid item xs={3}>
                          <Paper className={classes.paper}><PersonalInfo></PersonalInfo></Paper>
                      </Grid>
                      <Grid item xs={3}>
                          <Paper className={classes.paper}><WikilegisCard></WikilegisCard></Paper>
                      
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container spacing={6}>
                            <Grid item xs={8}>
                                <Paper className={classes.paper}><PautaParticipativaCard></PautaParticipativaCard></Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper} style={{height:"100%",backgroundImage:`url(https://imgur.com/BLbBhMK)`}}>Dados seguros</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}><InterativasCard></InterativasCard></Paper>
                            </Grid>
                        </Grid>
                      </Grid>
                  </Grid>
              </Box>
                  
          </ThemeProvider>
        </div>
      );
    }
  }

export default Main