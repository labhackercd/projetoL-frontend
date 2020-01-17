import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {ProfileCard} from '../../components/main/profile_card'
import {PersonalInfo} from '../../components/main/personal_info'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


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
                        <Box><ProfileCard></ProfileCard></Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper>></Paper>
                    </Grid>
                </Grid>
              </Box>
              <Box width="90%" mx="auto" pt={10}>
                <Grid container spacing={5}>
                    <Grid item xs={3}>
                          <Typography color="primary" variant="h5">Informações Pessoais</Typography>
                      </Grid>
                      <Grid item xs={9}>
                          <Typography color="primary" variant="h5">Suas últimas participações</Typography>
                      </Grid>
                      <Grid item xs={3}>
                          <Paper className={classes.paper}><PersonalInfo></PersonalInfo></Paper>
                      </Grid>
                      <Grid item xs={3}>
                          <Paper className={classes.paper}>wikilegis</Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container spacing={6}>
                            <Grid item xs={8}>
                                <Paper className={classes.paper}>PAUTA</Paper>
                            </Grid>
                            <Grid item xs={4}>
                                <Paper className={classes.paper}>Dados seguros</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>Interativas</Paper>
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