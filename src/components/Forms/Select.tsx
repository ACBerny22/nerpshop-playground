import { useEffect, useState } from "react";
import { FieldsContext } from "./FormWrapper";
import React from "react";

export default function Select({ name, label, options, className, type }: any) {
    const contextFields = React.useContext(FieldsContext);

    const [filter, setFilter] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(
        contextFields[name].initialValue
    );
    const [filteredOptions, setFilteredOptions] = useState(options);

    // const filteredOptions = options.filter((option: any) => {
    //     // if(selectedValue !== null){
    //     //     return true;
    //     // }
    //     option.label.toLowerCase().includes(filter?.toLowerCase());
    // });

    useEffect(() => {
        if (filter === "") {
            setFilteredOptions(options);
        }
        setFilteredOptions(
            options.filter((option: any) => {
                return option.label
                    .toLowerCase()
                    .includes(filter?.toLowerCase());
            })
        );
    }, [filter]);

    const handleSelect = (value: any, label: string) => {
        setIsOpen(false); // Close dropdown
        setSelectedValue(value); // Set actual value
        setFilter(label); // Update filter to show selected label
    };

    const handleFilter = (value: any) => {
        setFilter(value);
        let found = options.find((option: any) => option.label === value);
        if (found) {
            setSelectedValue(found.value);
        } else {
            setSelectedValue("");
        }
    };

    useEffect(() => {
        console.log(selectedValue);
        console.log(options);
        setFilter(
            options.find((option: any) => option.value == selectedValue)
                ?.label || filter
        );
    }, [selectedValue, options]);

    return (
        <div className="flex flex-col gap-1 relative">
            <span className="font-semibold">{label}</span>
            {/* Hidden Input to Store Actual Value */}
            <input
                type="hidden"
                name={contextFields[name].name}
                key={contextFields[name].name}
                value={type === "number" ? (Number(selectedValue) || "") : (selectedValue || "")}
                //defaultValue={contextFields[name].initialValue}
            />
            {/* Visible Input for Filtering */}
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Filter options..."
                    value={filter || ""}
                    onFocus={() => setIsOpen(true)}
                    onChange={(e) => handleFilter(e.target.value)}
                    className={
                        className ||
                        "border-y border-l p-2 rounded-y rounded-l border-zinc-600 w-full"
                    }
                />
                {/* button to open dropdown */}
                <button
                    type="button"
                    className="py-2 px-3 hover:bg-[#1220a1] hover:text-white transition-all border-r border-y rounded-r text-black font-semibold text-md border-zinc-600"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <div className="">+</div>
                </button>
            </div>
            {isOpen && (
                <ul className="sticky top-16 z-50 bg-white border max-h-40 overflow-y-auto w-full rounded-xl dark:bg-zinc-800 dark:border-zinc-600">
                    {filteredOptions.map((option: any) => (
                        <li
                            key={option.value}
                            className="p-2 hover:bg-gray-200 cursor-pointer dark:hover:bg-zinc-700"
                            onClick={() =>
                                handleSelect(option.value, option.label)
                            }
                        >
                            {option.label}
                        </li>
                    ))}
                    {filteredOptions.length === 0 && (
                        <li className="p-2 text-gray-500">No options found</li>
                    )}
                </ul>
            )}
            <p className="text-red-400 text-sm">{contextFields[name].errors}</p>
        </div>
    );
}
