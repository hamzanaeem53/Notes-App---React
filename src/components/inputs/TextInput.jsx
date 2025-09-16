const TextInput = ({ label, name, value, onTextInput }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block font-semibold">
                {label}
            </label>
            <input name={name} type="text" className="w-full p-2 border rounded-lg" value={value} onChange={onTextInput} />
        </div>
    );
}

export default TextInput;