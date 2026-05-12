"use client";
import { updateDestination } from "@/lib/action";
import {
  Button,
  FieldError,
  Select,
  Form,
  Input,
  Label,
  ListBox,
  Modal,
  TextArea,
  TextField,
  FieldGroup,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FiSave, FiEdit } from "react-icons/fi";

const EditModal = ({destination}) => {
    
const router = useRouter()
    
    const { name,_id, country, category, price, duration, date, image, description } = destination;
  const categories = [
    { id: "beach", name: "Beach" },
    { id: "mountain", name: "Mountain" },
    { id: "city", name: "City" },
    { id: "adventure", name: "Adventure" },
    { id: "forest", name: "Forest" },
  ];

  return (
    <div>
      <Modal>
        {/* Trigger Button */}
        <Button variant="secondary" className="flex items-center gap-2 border border-gray-300">
          <FiEdit size={16} /> Edit
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="sm:max-w-2xl bg-white rounded-lg shadow-xl">
              <Modal.CloseTrigger />
              
              <Modal.Header className="border-b border-gray-100 p-6">
                <Modal.Heading className="text-xl font-bold text-gray-800">
                  Edit Destination
                </Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Form onSubmit={(e)=>updateDestination(e,_id,router)} className="w-full">
                  <FieldGroup className="space-y-6">
                    
                    {/* Destination Name */}
                    <TextField
                    defaultValue={name}
                    isRequired name="name">
                      <Label className="font-semibold text-gray-700">
                        Destination Name
                      </Label>
                      <Input
                        placeholder="Bali Paradise"
                        className="bg-gray-50/50"
                     
                      />
                      <FieldError className="text-xs text-red-500" />
                    </TextField>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                      {/* Country */}
                      <TextField
                      defaultValue={country}
                      isRequired name="country">
                        <Label className="font-semibold text-gray-700">
                          Country
                        </Label>
                        <Input
                          placeholder="Indonesia"
                          className="bg-gray-50/50"
                        />
                        <FieldError className="text-xs text-red-500" />
                      </TextField>

                      {/* Category */}
                      <Select defaultValue={category} name="category" placeholder="Select category" isRequired>
                        <Label className="font-semibold text-gray-700">
                          Category
                        </Label>
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
                      <TextField defaultValue={price} isRequired name="price" type="number">
                        <Label className="font-semibold text-gray-700">
                          Price (USD)
                        </Label>
                        <Input
                          placeholder="e.g., 1299"
                          className="bg-gray-50/50"
                        />
                        <FieldError className="text-xs text-red-500" />
                      </TextField>

                      {/* Duration */}
                      <TextField defaultValue={duration} isRequired name="duration">
                        <Label className="font-semibold text-gray-700">
                          Duration
                        </Label>
                        <Input
                          placeholder="e.g., 7 Days/6 Nights"
                          className="bg-gray-50/50"
                        />
                        <FieldError className="text-xs text-red-500" />
                      </TextField>
                    </div>

                    {/* Departure Date */}
                    <TextField  isRequired defaultValue={date} name="date" type="date">
                      <Label className="font-semibold text-gray-700">
                        Departure Date
                      </Label>
                      <Input className="bg-gray-50/50" />
                      <FieldError className="text-xs text-red-500" />
                    </TextField>

                    {/* Image URL */}
                    <TextField defaultValue={image} isRequired name="image" type="url">
                      <Label className="font-semibold text-gray-700">
                        Image URL
                      </Label>
                      <Input
                        placeholder="https://example.com/image.jpg"
                        className="bg-gray-50/50"
                      />
                      <FieldError className="text-xs text-red-500" />
                    </TextField>

                    {/* Description */}
                    <TextField defaultValue={description} isRequired name="description">
                      <Label className="font-semibold text-gray-700">
                        Description
                      </Label>
                      <TextArea
                        placeholder="Describe the travel experience..."
                        className="bg-gray-50/50 min-h-[120px]"
                      />
                      <FieldError className="text-xs text-red-500" />
                    </TextField>
                  </FieldGroup>

                  <Modal.Footer className="px-0 pt-6">
                    <div className="flex justify-end items-center gap-3 w-full">
                      <Button
                        type="submit"
                        className="bg-[#1DA1C1] text-white hover:bg-[#178ba7] flex items-center gap-2 px-6 h-10 shadow-md transition-all active:scale-95"
                      >
                        <FiSave /> Update
                      </Button>
                    </div>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;