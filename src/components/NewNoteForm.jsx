// this component uses 1 state to handle data of all controlled input fields

import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextareaInput from "./inputs/TextareaInput";

const NewNoteForm = ({ notes, addNote }) => {
    const [formData, setFormData] = useState({
        title: '',
        priority: 'Medium',
        category: 'Work',
        description: ''
    });
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.description) {
            alert("Please fill in Title and Description Fields");
            return;
        }
        let newNote = {
            id: Date.now(),
            ...formData
        };
        addNote([newNote, ...notes]);
        setFormData({
            title: '',
            priority: 'Medium',
            category: 'Work',
            description: ''
        });

    };

    return (
        <>
            <button className="w-full bg-gray border border-gray-300 text-purple-800 py-2 rouned-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4" onClick={() => setIsFormVisible(!isFormVisible)}
            >
                {isFormVisible ? 'Hide Form ❌' : 'Add Note ➕'}
            </button>
            {
                isFormVisible && (
                    <form action="" className="mb-6" onSubmit={handleSubmit}>
                        <TextInput label='Title' name='title' value={formData.title} onTextInput={handleChange} />
                        <SelectInput
                            label='Priority'
                            name='priority'
                            value={formData.priority}
                            onOptionSelect={handleChange}
                            options={[
                                { value: 'High', label: 'High' },
                                { value: 'Medium', label: 'Medium' },
                                { value: 'Low', label: 'Low' }
                            ]}
                        />
                        <SelectInput
                            label='Category'
                            name='category'
                            value={formData.category}
                            onOptionSelect={handleChange}
                            options={[
                                { value: 'Work', label: 'Work' },
                                { value: 'Ideas', label: 'Ideas' },
                                { value: 'Personal', label: 'Personal' }
                            ]}
                        />
                        <TextareaInput label='Description' name='description' value={formData.description} onTextInput={handleChange} />

                        <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer">Add Note</button>
                    </form>
                )
            }
        </>
    );
}

export default NewNoteForm;