
import React, { useEffect } from 'react';
import { RHFInput } from 'react-hook-form-input';

import { FormControl, Grid, IconButton, TextField, makeStyles, createStyles, Theme } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Product, ComponentType } from '../types/types';
import SimpleSelect from './simple-select';

export interface IComponentProductFormProps {
    setValue: any,
    register: any;
    nestIndex: string;
    index: number;
    products: Product[];
    remove: any;
    errors: any;
    getComponentProduct: () => Promise<any>,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

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

    }),
);


export default function ComponentProductForm(props: IComponentProductFormProps) {
    const classes = useStyles();
    const { register, products, getComponentProduct, nestIndex, index, setValue, remove, errors } = props;


    const ProductOptions = products.map(p => ({ 'value': p.id, 'label': p.name }));

    useEffect(() => {

        getComponentProduct()

    }, [getComponentProduct]);

    return (
        <Grid container className={classes.formBox}>
            <Grid item lg={5}>
                <FormControl className={classes.formControl} variant="outlined">
                    <input type="hidden" name={`${nestIndex}.type`} value={ComponentType.Product} ref={register} />
                    <RHFInput
                        as={
                            <SimpleSelect
                                label="Product"
                                options={ProductOptions}
                                name={`${nestIndex}.productId`}
                            />
                        }
                        name={`${nestIndex}.productId`}
                        register={register({
                            required: true
                        })}
                        setValue={setValue}
                    />

                </FormControl>
            </Grid>
            <Grid item lg={5}>
                <FormControl className={classes.formControl} variant="outlined">
                    <TextField
                        name={`${nestIndex}.quantity`}
                        id="composite-product-quantity-id"
                        label="Quantity"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{ 'min': 1 }}
                        variant="outlined"
                        inputRef={register({ required: 'This field is required' })}
                    />

                </FormControl>
            </Grid>
            <Grid item lg={2}>
                <IconButton aria-label="delete" color="primary" onClick={() => remove(index)}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
}



