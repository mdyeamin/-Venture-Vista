"use client";
import { FiSave, FiTrash2 } from "react-icons/fi";
import {
  Button,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
  FieldGroup,
  FieldError,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { onSubmit } from "@/lib/action";





const addDestination = () => {
    const router = useRouter()

  const categories = [
    { id: "beach", name: "Beach" },
    { id: "mountain", name: "Mountain" },
    { id: "city", name: "City" },
    { id: "adventure", name: "Adventure" },
    { id: "forest", name: "Forest" },
  ];
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 py-12">
      <Form
        className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-sm border border-gray-100"
        onSubmit={(e)=> onSubmit(e,router)}
      >
        <FieldGroup className="space-y-6">
          {/* Destination Name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) return "Destination name is too short";
              return null;
            }}
          >
            <Label className="font-semibold text-gray-700">
              Destination Name
            </Label>
            <Input placeholder="Bali Paradise" className="bg-gray-50/50" />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            {/* Country */}
            <TextField
              isRequired
              name="country"
              validate={(value) => {
                if (value.length < 2) return "Please enter a valid country";
                return null;
              }}
            >
              <Label className="font-semibold text-gray-700">Country</Label>
              <Input placeholder="Indonesia" className="bg-gray-50/50" />
              <FieldError className="text-xs text-red-500" />
            </TextField>

            {/* Category */}
            <Select name="category" placeholder="Select category" isRequired>
              <Label className="font-semibold text-gray-700">Category</Label>
              <Select.Trigger className="bg-gray-50/50 border-gray-200">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  {categories.map((cat) => (
                    <ListBox.Item key={cat.id} id={cat.id} textValue={cat.name}>
                      {cat.name}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Price */}
            <TextField
              isRequired
              name="price"
              type="number"
              validate={(value) => {
                if (Number(value) <= 0) return "Price must be greater than 0";
                return null;
              }}
            >
              <Label className="font-semibold text-gray-700">Price (USD)</Label>
              <Input placeholder="e.g., 1299" className="bg-gray-50/50" />
              <FieldError className="text-xs text-red-500" />
            </TextField>

            {/* Duration */}
            <TextField
              isRequired
              name="duration"
              validate={(value) => {
                if (value.length < 3)
                  return "Please enter duration (e.g. 3 Days)";
                return null;
              }}
            >
              <Label className="font-semibold text-gray-700">duration</Label>
              <Input
                placeholder="e.g., 7 Days/6 Nights"
                className="bg-gray-50/50"
              />
              <FieldError className="text-xs text-red-500" />
            </TextField>
          </div>

          {/* Departure Date */}
          <TextField isRequired name="date" type="date">
            <Label className="font-semibold text-gray-700">
              Departure Date
            </Label>
            <Input className="bg-gray-50/50" />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          {/* Image URL */}
          <TextField
            isRequired
            name="image"
            type="url"
            validate={(value) => {
              try {
                new URL(value);
                return null;
              } catch (e) {
                return "Please enter a valid image URL";
              }
            }}
          >
            <Label className="font-semibold text-gray-700">Image URL</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              className="bg-gray-50/50"
            />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          {/* Description */}
          <TextField
            isRequired
            name="description"
            validate={(value) => {
              if (value.length < 20)
                return "Description must be at least 20 characters";
              return null;
            }}
          >
            <Label className="font-semibold text-gray-700">Description</Label>
            <TextArea
              placeholder="Describe the travel experience..."
              className="bg-gray-50/50 min-h-[120px]"
            />
            <FieldError className="text-xs text-red-500" />
          </TextField>
        </FieldGroup>

        <div className="flex justify-end items-center gap-3 mt-8">
          <Button
            type="reset"
            className="border border-red-500 text-red-500 bg-transparent hover:bg-red-50 flex items-center gap-2 px-6 h-10"
          >
            <FiTrash2 /> Cancel
          </Button>
          <Button
            type="submit"
            className="bg-[#1DA1C1] text-white hover:bg-[#178ba7] flex items-center gap-2 px-6 h-10 shadow-md transition-all active:scale-95"
          >
            <FiSave /> Add Travel Package
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default addDestination;
