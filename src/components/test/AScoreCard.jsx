import React from 'react';

import { Paper, Typography, Divider, Grid, Table, TableBody, TableHead, TableCell, TableRow, Checkbox } from '@material-ui/core';

import { withStyles } from '@material-ui/styles';


const styles = theme => ({
    root: {
        padding: theme.spacing(2)
    }
})

class AScoreCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                >
                    <Grid
                        item
                    >
                        <Typography variant="h5">
                            {this.props.abilityScoreValue.abbr}
                        </Typography>

                        <Typography variant="h6">
                            10
                        </Typography>

                        <Divider />

                        <Typography variant="h6">
                            +1
                        </Typography>

                        <Divider />
                        
                        <Typography variant="h7">
                            Save: +4
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Divider orientation="vertical"/>
                    </Grid>

                    <Grid item>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        padding="checkbox"
                                    >
                                        Prof.
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        padding="checkbox"
                                    >
                                        Exp.
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        padding="checkbox"
                                    >
                                        Skill
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {this.props.skillList.map(item => {
                                    if (item.abilityScoreID === this.props.abilityScoreValue.index) {
                                        return (
                                            <TableRow>
                                                <TableCell
                                                    align="center"
                                                    padding="checkbox"
                                                >
                                                    <Checkbox
                                                        disableFocusRipple
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                    padding="checkbox"
                                                >
                                                    <Checkbox
                                                        disableFocusRipple
                                                        color="primary"
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    align="left"
                                                    padding="checkbox"
                                                >
                                                    {item.name}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                })}

                            </TableBody>
                        </Table>
                    </Grid>

                </Grid>

            </Paper>
        );
    }
}

export default withStyles(styles)(AScoreCard);