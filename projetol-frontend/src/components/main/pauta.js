import React from 'react';
import PropTypes from 'prop-types';

// Material-ui imports
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { green,red } from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';

import Icon from '@material-ui/core/Icon';
import pautaLogo from './pauta_logo.svg'

import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

const useStyles = theme => ({
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
    customBadge: {
        backgroundColor: "#2DA965",
        color: "green"
    },
    imageIcon: {
        height: '45px',
      },
      iconRoot: {
        textAlign: 'center'
      }
});


export function CardItem(props){

    return (
        <Paper className={props.classe.paper}>
            <Grid container wrap="nowrap" spacing={1}>

                <Grid item xs={10} zeroMinWidth>
                    <Typography style={{ marginLeft: 10 }} variant="button" color="primary">
                        <b>{props.projetoDeLei.titulo}</b>
                    </Typography>

                    {props.projetoDeLei.votouAFavor ? (
                        <Typography style={{ marginLeft: 10 }} variant="subtitle1" color="primary">
                            Você votou a favor do projeto
                        </Typography>
                    ) : (
                        <Typography style={{ marginLeft: 10 }} variant="subtitle1" color="primary">
                            Você votou contra o projeto
                        </Typography>
                    )}
            </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="flex-start">
                    {props.projetoDeLei.votouAFavor ? (
                        <ThumbUpOutlinedIcon  fontSize="large"></ThumbUpOutlinedIcon>
                    ) : (
                        <ThumbDownOutlinedIcon  fontSize="large"></ThumbDownOutlinedIcon>
                    )}     
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

class PautaParticipativaCard extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { listaProjetosdeLei: [
                {
                    titulo:"PL 1876/2015",
                    votouAFavor:true
                } 
            ] };
        }


    render(){
        const { classes } = this.props;

        return(
            <div className={classes.root}>
            <Box width="90%" mx="auto">
                <Grid container spacing={6}>
                    <Grid item xs={2}>
                            <div className={classes.banner}>            
                              <Icon className={classes.iconRoot}>
                                <img className={classes.imageIcon} src={pautaLogo}/>
                              </Icon>
                            </div>
                    </Grid>
                    <Grid item xs={10}>
                        <Box display="flex" justifyContent="flex-end" pt={2}>
                            <Typography variant="caption" display="inline" color="primary" align="right">histórico</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box width="90%" mx="auto" pt={3} mb={3}>  
                <Grid container spacing={1}>
                    {
                        this.state.listaProjetosdeLei.map((lei) =>
                        <Grid key={lei.titulo} item xs={12}>
                            <CardItem  projetoDeLei={lei} classe={classes}></CardItem>
                        </Grid>
                        )
                    }
                </Grid>
            </Box>
          </div>
        )
    }
}

PautaParticipativaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(PautaParticipativaCard);