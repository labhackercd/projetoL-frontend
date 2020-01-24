import React from 'react';
import PropTypes from 'prop-types';

// Material-ui imports
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Icon from '@material-ui/core/Icon';
import interativaLogo from './audiencias_logo.png'

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

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
            <Grid container spacing={1}>

                <Grid item xs={11} zeroMinWidth>
                    <Typography style={{ marginLeft: 10 }} variant="h6" color="primary">
                        <b>Desapropriações de residências próximas às torres da Enel em Cabo Frio</b>
                    </Typography>

                </Grid>
                <Grid item xs={1}>
                    <QuestionAnswerIcon></QuestionAnswerIcon>

                </Grid>
                <Grid item xs={12}>
                        <Typography style={{ marginLeft: 10 }} variant="subtitle2" color="primary">
                                Você enviou a pergunta:
                        </Typography>

                        <Typography style={{ marginLeft: 10 }} variant="caption" color="primary">
                            “Os ricos serão desapropriados de beira de rios (rios esses que pertencem ao Estado e que todo cidadão brasileiro tem direito de frequentar, mas estão cercados por mansões)?.”
                        </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

class InterativasCard extends React.Component {

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
                                <img className={classes.imageIcon} src={interativaLogo} alt="Logo Audiências Interativas"/>
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

InterativasCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(InterativasCard);