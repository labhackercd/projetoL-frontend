import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import Typography from '@material-ui/core/Typography';

import {ProfileCard} from '../../components/main/profile_card'
import {PersonalInfo} from '../../components/main/personal_info'
import WikilegisCard from '../../components/main/wikilegis'
import PautaParticipativaCard from '../../components/main/pauta'
import InterativasCard from '../../components/main/interativas'

import banner from './banner.svg';
import SettingsIcon from '@material-ui/icons/Settings';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

class Main extends React.Component {
    

    render() {
      const classes = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(7),
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
            secondary:{ main: '#FFFFFF'}
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
            },
            h5:{
              fontWeight:300,
              fontSize:'20px',
            },
            h6:{
              fontWeight:400,
              fontSize:'20px',
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
                            <img src={banner} style={{ height: "100%", width: "100%"}} alt="Banner boas vindas"/>
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
                                <Paper className={classes.paper}>
                                  <Box borderRadius="borderRadius" bgcolor="#2DA965" display="flex" justifyContent="center" width={1} height="100%">
                                      <Grid container>
                                        <Grid item xs={12}>
                                          <Box display="flex" mt={1} justifyContent="center" width={1}>
                                              <CheckCircleOutlineIcon style={{ fontSize: 50, color:"#FFFFFF" }} size="large"></CheckCircleOutlineIcon>
                                          </Box>
                                            
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box mt={2} mb={3} ml={3} width="100%" display="flex" justifyContent="flex-start">
                                                <Typography variant="h6" color="secondary"><b>Seus dados</b><br></br><b>estão seguros</b></Typography>
          
                                            </Box>
                                              
                                        </Grid>
                                      </Grid>
                                  </Box>

                                </Paper>
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