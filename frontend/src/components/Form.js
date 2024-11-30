import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FORM_IMG from "../assets/form_img.png";

const Form = ({ formRef }) => {
    const [name, setName] = useState("");
    const [formData, setFormData] = useState({ sqft: "", floors: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            navigate("/results", {
                state: {
                    name: name,
                    sqft: formData.sqft,
                    floors: formData.floors,
                },
            });
            const response = await fetch("https://build-metrics-ai.onrender.com/api/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            localStorage.setItem("results", JSON.stringify(data));
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <div
            ref={formRef}
            className="mx-20 px-2 absolute inset-0 top-[720px] flex flex-col items-center justify-center h-[450px] bg-gray-100 my-5"
        >
            {/* Form Heading */}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                The AI Powered Construction Estimator
            </h2>
            <p className="text-gray-600 text-center mb-6">
                Enter the details of your house to get an estimate of the construction cost.
                Provide accurate values for the most precise calculation!
            </p>

            <form
                className="flex flex-col relative items-center gap-6 justify-center p-5 bg-white shadow-md rounded-md"
                onSubmit={handleSubmit}
            >
                <div className="absolute -top-2 -left-40">
                    <img src={FORM_IMG} alt="form-img" className="w-64 h-64" />
                </div>

                <div className="flex items-center gap-4">
                    <label className="w-80 text-right text-xl text-gray-700 font-medium">
                        Enter your <span className="font-bold">Name</span>
                    </label>
                    <input
                        type="text"
                        name="sqft"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        required
                        className="border text-black border-gray-300 rounded-md p-3 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Square Feet Input */}
                <div className="flex items-center gap-4">
                    <label className="w-80 text-right text-xl text-gray-700 font-medium">
                        Number of <span className="font-bold">Square Feet</span>
                    </label>
                    <input
                        type="text"
                        name="sqft"
                        value={formData.sqft}
                        onChange={handleChange}
                        required
                        className="border text-black border-gray-300 rounded-md p-3 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Floors Input */}
                <div className="flex items-center gap-4">
                    <label className="w-80 text-right text-xl text-gray-700 font-medium">
                        Number of <span className="font-bold">Floors</span>
                    </label>
                    <input
                        type="text"
                        name="floors"
                        value={formData.floors}
                        onChange={handleChange}
                        required
                        className="border text-black border-gray-300 rounded-md p-3 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Estimate
                </button>
            </form>
        </div>
    );
};

export default Form;
