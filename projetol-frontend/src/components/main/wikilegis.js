import React from 'react';
import PropTypes from 'prop-types';

// Material-ui imports
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { green,red } from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';

import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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
    }
});


export function CardItem(props){

    return (
        <Paper className={props.classe.paper}>
            <Grid container wrap="nowrap" spacing={1}>
                <Grid item xs={1}>
                    <Box pt={1} display="flex" justifyContent="flex-end" alignContent="center" justify="center">
                        <Badge classes={{ badge: props.classe.customBadge }} variant="dot"></Badge>
                    </Box>  
                </Grid>
                <Grid item xs={9} zeroMinWidth>
                    <Typography style={{ marginLeft: 10 }} variant="button" color="primary">
                        <b>{props.projetoDeLei.titulo}</b>
                    </Typography>

                    {props.projetoDeLei.votouAFavor ? (
                        <Typography style={{ marginLeft: 10 }} variant="subtitle1" color="primary">
                            Você votou a favor uma opinião
                        </Typography>
                    ) : (
                        <Typography style={{ marginLeft: 10 }} variant="subtitle1" color="primary">
                            Você votou contra uma opinião
                        </Typography>
                    )}
            </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="flex-start">
                    {props.projetoDeLei.votouAFavor ? (
                        <CheckRoundedIcon  fontSize="large" style={{ color: green[500] }}></CheckRoundedIcon>
                    ) : (
                        <HighlightOffIcon  fontSize="large" style={{ color: red[500] }}></HighlightOffIcon>
                    )}     
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

class WikilegisCard extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { listaProjetosdeLei: [
                {
                    titulo:"PL 9622/2018",
                    votouAFavor:true
                },
                {
                    titulo:"PL 9242/2016",
                    votouAFavor:false
                },
                {
                    titulo:"PL 9241/2015",
                    votouAFavor:false
                },    
                {
                    titulo:"PL 9230/2013",
                    votouAFavor:true
                },
                {
                    titulo:"PL 9237/2015",
                    votouAFavor:false
                },    
            ] };
        }

    render(){
        const { classes } = this.props;

        return(
            <div className={classes.root}>
            <Box width="90%" mx="auto">
                <Grid container spacing={6}>
                    <Grid item xs={2}>
                        <Avatar alt="Foto de Perfil" src="" className={classes.small}/>
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
                        this.state.listaProjetosdeLei.map((lei, key) =>
                        <Grid item xs={12}>
                            <CardItem projetoDeLei={lei} classe={classes}></CardItem>
                        </Grid>
                        )
                    }
                </Grid>
            </Box>
          </div>
        )
    }
}

WikilegisCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(WikilegisCard);