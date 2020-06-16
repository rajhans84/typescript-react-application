import * as React from 'react';
import { Grid, FormControl, IconButton, TextField, makeStyles, Theme, createStyles, Container } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { ComponentType } from '../types/types';
import ComponentProductForm from '../containers/component-product-form-container';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formContainer: {
            background: '#dddada',
            padding: theme.spacing(2),
        },
        formBox: {
            background: '#fff',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 320,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        saveButton: {
            background: '#32a852',
            margin: theme.spacing(1)
        },
        cancelButton: {
            background: '#bf2d22',
            margin: theme.spacing(1)
        }
    }),
);

export interface IComponentGroupFormProps {
    register: any;
    index: number,
    nestIndex: string;
    remove: any;
    setValue: any;
    errors: any;
    getValues: any;
}

export function ComponentGroupForm(props: IComponentGroupFormProps) {
    const { register, nestIndex, remove, setValue, index, errors, getValues } = props;
    const classes = useStyles();
    const value = getValues({ nest: true });

    const deepNestIndex = `${nestIndex}.components[${index}]`;
    return (
        <Container className={classes.formContainer}>
            <Grid container className={classes.formBox}>
                <Grid item lg={10}>
                    <FormControl className={classes.formControl} variant="outlined">
                        <input type="hidden" name={`${nestIndex}.type`} value={ComponentType.Group} ref={register} />
                        <TextField inputRef={register} label="Group Label" name={`${nestIndex}.label`} />
                    </FormControl>
                </Grid>
                <Grid item lg={2}>
                    <IconButton aria-label="delete" color="primary" onClick={() => remove(index)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <ComponentProductForm {...{ register, nestIndex: deepNestIndex, index, errors, remove, setValue }} />
        </Container>
    );
}
