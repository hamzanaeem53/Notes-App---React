const SelectInput = ({ label, name, value, onOptionSelect, options }) => {

    return (
        <div className="mb-4">
            <label htmlFor={name} className="block font-semibold">
                {label}
            </label>
            <select name={name} className="w-full p-2 border rounded-lg" value={value} onChange={onOptionSelect}>
                {
                    options.map((option) => (
                        <option value={option.value} key={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    );

};

export default SelectInput;