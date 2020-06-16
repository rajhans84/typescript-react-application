import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select, { SelectProps } from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120
        },
        selectEmpty: {
            marginTop: theme.spacing(2)
        }
    })
);

interface Option {
    value: any;
    label: string;
}

interface ComponentProps {
    options: Option[];
    label: string;
    name: string;
    onChange?: any;
    value?: Option;
    error?: boolean;
    helperText?: string;
}

export default function SimpleSelect(props: ComponentProps & SelectProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState("");

    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.onChange(event);
    };

    return (
        <FormControl
            variant="outlined"
            margin="dense"
            className={classes.formControl}
            error={!!props.error}
        >
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                {props.label}
            </InputLabel>
            <Select
                name={props.name}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                labelWidth={labelWidth}
                value={props.hasOwnProperty("value") ? props.value : value}
                onChange={
                    props.hasOwnProperty("onChange") ? handleChange : handleChange
                }
            >
                {props.options.map((option: any) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{props.helperText}</FormHelperText>
        </FormControl>
    );
}
