import React, { ChangeEvent, HTMLInputTypeAttribute,  } from "react"


interface TextfieldProps  {
    label: string
    placeholder?: string
    type: HTMLInputTypeAttribute
    value: string
    setValue: (val: string) => void
    error?: string
    inputProps?: React.ComponentProps<"input">
}

export const Textfield: React.FC<TextfieldProps> = ({ label, placeholder, type, value, setValue, error, inputProps}) => {

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      };

    return (
        <div className="field">
            <label className="label" htmlFor={label}>{label}</label>
            <div className="control">
                <input id={label} className={['input', error ? 'is-danger' : ''].join(' ')} type={type} placeholder={placeholder} value={value} onChange={onChange} {...inputProps}/>
            </div>
            {error && <p className="help is-danger">{error}</p>}
        </div>
    )
}