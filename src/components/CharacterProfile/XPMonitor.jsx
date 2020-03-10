import React, { Fragment } from 'react';

import { TextField } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import { UPDATE_CHAR_XP } from '../../actions/characterActions';

const useStyles = makeStyles(theme => ({
    xpCell: {
        width: 100
    }
}));

export default function XPMonitor() {

    const classes = useStyles();

    const dispatch = useDispatch();

    const currentXP = useSelector(state => state.character.xp);
    
    const levelRules = useSelector(state => state.rules.levels);

    function xpBounds(event, levelRules) {

        if (event.target.value > levelRules[levelRules.length - 1].xp) {
            dispatch({
                type: UPDATE_CHAR_XP,
                payload: levelRules[levelRules.length - 1].xp
            })
        }

        else if (event.target.value < levelRules[0].xp) {
            dispatch({
                type: UPDATE_CHAR_XP,
                payload: levelRules[0].xp
            })
        }

        else {
            dispatch({
                type: UPDATE_CHAR_XP,
                payload: event.target.value
            })
        }
    }

    return (
        <Fragment>
            <TextField
                className={classes.xpCell}
                variant="outlined"
                type="number"
                label="XP"
                value={currentXP}

                onChange={(event) => {
                    xpBounds(event, levelRules);
                }}
            />
        </Fragment>
    )
}