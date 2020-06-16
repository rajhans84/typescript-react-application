
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useForm, useFieldArray } from "react-hook-form";

import { FormControl, Select, MenuItem, Grid, Button, Container, Typography, TextField } from '@material-ui/core';
import ComponentProductForm from '../containers/component-product-form-container';
import { useParams } from 'react-router-dom';
import { CompositeProduct, ComponentType } from '../types/types';
import { ComponentGroupForm } from './component-group-form';

export interface IAddEditCompositeProductFormProps {
    id?: string;
    saveCompositeProduct: (data: CompositeProductInputType) => Promise<any>,
}

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

type CompType = {
    components: { type: string }[]
}

export type CompositeProductInputType = Omit<CompositeProduct, "id">;


export function AddEditCompositeProductForm(props: IAddEditCompositeProductFormProps) {
    let { id } = useParams();
    const { saveCompositeProduct } = props;
    console.log(id);
    const { register, handleSubmit, watch, setValue, control, triggerValidation, errors, getValues } = useForm<CompositeProductInputType>({
        defaultValues: {
            name: '',
            components: []
        }
    });

    const { fields, append, remove } = useFieldArray({ control, name: 'components' });

    const classes = useStyles();




    const onSubmit = (data: CompositeProductInputType) => {
        triggerValidation();
        if (Object.keys(errors).length < 1) {
            console.log('submitting', JSON.stringify(data));
            saveCompositeProduct(data);
        }
    }
    console.log(errors);


    const handleAddProduct = () => {
        append({ type: ComponentType.Product });
    };

    const handleAddGroup = () => {
        append({ type: ComponentType.Group, label: '', components: [] });
    };

    const addComponent = (event: React.ChangeEvent<{ value: unknown }>) => {
        switch (event.target.value) {
            case 'product':
                handleAddProduct();
                break;
            case 'group':
                handleAddGroup();
                break;
        }
    };

    const renderElements = (item: any, index: number) => {
        const { type } = item;
        const nestIndex = `components[${index}]`;
        if (type === "GROUP") {
            return <ComponentGroupForm {...{ register, nestIndex, setValue, index, errors, remove, getValues }} />;
        }
        return <ComponentProductForm {...{ setValue, register, nestIndex, index, errors, remove }} />
    }
    const nestedActions = [{ name: '+ Add Product', handler: 'product' }, { name: '+ Add Group', handler: 'group' }];

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container >
                    <FormControl className={classes.formControl}>
                        <TextField inputRef={register({ required: 'This field is required' })} label="Name" name="name" />
                    </FormControl>
                </Container>
                <Typography>Components</Typography>

                <Container className={classes.formContainer}>
                    <Container>{fields.map((component, i) => renderElements(component, i))}</Container>
                    <FormControl fullWidth variant="outlined" size="medium" margin="normal" className={classes.formBox}>
                        <Select displayEmpty labelId="composite-product-add-select-label" id="composite-product-add-id" value={'none'} onChange={addComponent}>
                            <MenuItem value="none" >
                                Add +
                        </MenuItem>
                            {nestedActions.map((item) => (
                                <MenuItem key={item.name} value={item.handler} >
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Container>
                <Grid container direction="row" justify="flex-end" alignItems="flex-start" >
                    <div style={{ color: 'red' }}>
                        {Object.keys(errors).length > 0 &&
                            'There are errors, form will not be submitted.'}


                    </div>
                    <Button size="medium" className={classes.saveButton} type='submit'>
                        Save
                    </Button>
                    <Button size="medium" className={classes.cancelButton}>
                        Cancel
                    </Button>
                </Grid>
            </form>

        </Container>
    );
}
