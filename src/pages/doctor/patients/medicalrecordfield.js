import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const ReportForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        treatmentMethod: "",
        weight: "",
        height: "",
        generalAppearance: "",
        treatment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value) => {
        setFormData((prev) => ({ ...prev, treatmentMethod: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="treatmentMethod">Method of Treatment</Label>
                <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a method" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="hospital">Hospital</SelectItem>
                            <SelectItem value="telemedicine">Telemedicine</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label htmlFor="weight">Weight</Label>
                <Input
                    type="text"
                    name="weight"
                    id="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="Enter weight"
                />
            </div>
            <div>
                <Label htmlFor="height">Height</Label>
                <Input
                    type="text"
                    name="height"
                    id="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="Enter height"
                />
            </div>
            <div>
                <Label htmlFor="generalAppearance">General Appearance</Label>
                <Input
                    type="text"
                    name="generalAppearance"
                    id="generalAppearance"
                    value={formData.generalAppearance}
                    onChange={handleChange}
                    placeholder="Describe general appearance"
                />
            </div>

            <div className="flex justify-end">
                <Button type="submit" className="bg-[#1F555D] text-white w-44 h-10 rounded-3xl hover:bg-blue-300">
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default ReportForm;
