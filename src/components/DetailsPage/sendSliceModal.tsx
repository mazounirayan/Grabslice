import { Skill } from "@interfaces/type";
import { useEffect } from "react";

export default function SendSliceModal({ setFormData, errors = {}, toppings }: { 
    setFormData?: (data: any) => void, 
    errors?: { [key: string]: string }, // Accept errors prop
    toppings: Skill[] 
}) {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData?.((prevData: any) => {
            if (type === "checkbox") {
                const updatedToppings = checked
                    ? [...(prevData.toppings || []), value]
                    : (prevData.toppings || []).filter((topping: string) => topping !== value);
                return {
                    ...prevData,
                    toppings: updatedToppings,
                };
            }
            return {
                ...prevData,
                [name]: value,
            };
        });
    };
        return (
            <div>
                <form>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                        <input
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                            type="email"
                            name="email"
                            placeholder="mail@gmail.com"
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} {/* Show error */}
                    </div>
                    <div className="space-y-2 mt-4">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">Toppings</label>
                        {toppings.map((topping) => (
                            <div key={topping.id} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={`topping-${topping.id}`}
                                    name="toppings"
                                    value={topping.name}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor={`topping-${topping.id}`} className="text-sm text-gray-700">
                                    {topping.name}
                                </label>
                            </div>
                        ))}
                        {errors.toppings && <p className="text-red-500 text-sm">{errors.toppings}</p>} {/* Show error */}
                    </div>
                </form>
            </div>
        );
    }
    

