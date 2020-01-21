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
import Icon from '@material-ui/core/Icon';
import wikilegisLogo from './wikilegis_logo.svg'

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

    // Get data from the api using graphql
    getWikilegisApiData(){
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl= "https://tes.edemocracia.camara.leg.br/wikilegis/graphql/?query=%7B%0A%20%20user(id%3A%206)%20%7B%0A%20%20%20%20firstName%0A%20%20%20%20lastName%0A%20%20%20%20profile%20%7B%0A%20%20%20%20%20%20gender%0A%20%20%20%20%20%20avatar%0A%20%20%20%20%7D%0A%20%20%20%20votes%20%7B%0A%20%20%20%20%20%20opinionVote%0A%20%20%20%20%7D%0A%20%20%20%20suggestions%20%7B%0A%20%20%20%20%20%20content%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A"
        const targetUrl2 = "https://tes.edemocracia.camara.leg.br/wikilegis/graphql/?query=query%7Busers%7BfirstName%7D%7D%E2%80%8E%E2%80%8F"
        fetch(proxyUrl+targetUrl, {
            method: 'GET',

          }).then(res => res.json())
            .then(data => console.log({ data }));
    }

    componentDidMount(){
        //make call
        console.log("montou");
        this.getWikilegisApiData();
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
                                <img className={classes.imageIcon} src={wikilegisLogo}/>
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

WikilegisCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(WikilegisCard);