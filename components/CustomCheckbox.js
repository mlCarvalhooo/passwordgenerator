import React from "react";
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";

export default function CustomCheckbox({ text, value, handleChange }) {
    return (
        <Checkbox
            icon={<Icon.FiCheck color="gray" size={17} />}
            checked={value}
            borderRadius="100px"
            borderColor="gray"
            style={{ border: "2px solid gray", padding: "0px" }}
            padding="0px"
            size="25px"
            label={text}
            labelStyle={{
                margin: 5,
                userSelect: "none",
                "font-size": 15
            }}
            onChange={(newValue) => handleChange(newValue)}
        />
    )
}
