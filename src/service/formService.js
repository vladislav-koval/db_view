const inputControls = {
    name: {
        label: "Name",
        value: '',
        type: 'text'
    },
    surname: {
        label: "Surname",
        value: '',
        type: 'text'
    },
    secure: {
        label: "Secure key",
        value: '',
        type: 'text'
    }
};

const textareaControl = {
    label: "Description",
    value: '',
};

export function getEntryInputs() {
    return {
        name: inputControls.name
    };
}

export function getUserInputs() {
    return inputControls;
}

export function getTextareaField() {
    return textareaControl;
}
