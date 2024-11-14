import { useState } from "react";

const Path = () => {
    const [form, setForm] = useState({
        email: '', userName: '', number: '', select: '', fruits: [], 
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setForm((prevForm) => ({
                ...prevForm,
                fruits: checked
                    ? [...prevForm.fruits, value]
                    : prevForm.fruits.filter((fruit) => fruit !== value),
            }));
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${JSON.stringify(form)}`);
    };

    return (
        <>
            <div className="formpagecontainer">
                <form className="formpage" onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label>Username:</label>
                        <br />
                        <input
                            type="text"
                            name="userName"
                            value={form.userName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label>Number:</label>
                        <br />
                        <input
                            type="number"
                            name="number"
                            value={form.number}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label>Course:</label>
                        <br />
                        <select
                            name="select"
                            value={form.select}
                            onChange={handleInputChange}
                        >
                            <option value="">Course</option>
                            <option value="Mech.eng">Mech.eng</option>
                            <option value="Economics">Economics</option>
                        </select>
                    </div>

                    <div>
                        <label>Select your favourite fruit:</label>
                        <br />
                        <input
                            type="checkbox"
                            name="fruits"
                            value="banana"
                            onChange={handleInputChange}
                        />{" "}
                        Banana
                        <input
                            type="checkbox"
                            name="fruits"
                            value="mango"
                            onChange={handleInputChange}
                        />{" "}
                        Mango
                        <input
                            type="checkbox"
                            name="fruits"
                            value="cherry"
                            onChange={handleInputChange}
                        />{" "}
                        Cherry
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Path;
