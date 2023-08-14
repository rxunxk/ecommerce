import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const postProduct = async (fData) => {
    await axios
      .post("http://localhost:8080/products/", fData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log("Server Response: ", res))
      .catch((err) => console.log("Error from server: ", err));
  };

  const onSubmit = (fData) => {
    console.log(fData.productForm);
    postProduct(fData.productForm);
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div className="flex justify-center mt-4">
      <Card className="max-w-[80%] w-[800px]">
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
          <CardDescription>
            Add a new product by filling this form
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-2 flex flex-col gap-2">
            <Label className="text-base">Title</Label>
            <Input
              placeholder="Title"
              {...register("productForm.title", {
                required: true,
              })}
            />
          </div>
          <div className="mb-2 flex flex-col gap-2">
            <Label className="text-base">Description</Label>
            <Input
              placeholder="Description"
              {...register("productForm.description", {
                required: true,
              })}
            />
          </div>
          <div className="mb-2 flex flex-col gap-2">
            <Label className="text-base">Price</Label>
            <Input
              type="number"
              {...register("productForm.price", {
                required: true,
              })}
            />
          </div>
          <div className="mb-2 flex flex-col gap-2">
            <Label className="text-base">Discount Percentage</Label>
            <Input
              type="number"
              {...register("productForm.discountPercentage", {
                required: true,
              })}
            />
          </div>
          <div className="mb-2 flex flex-col gap-2">
            <Label className="text-base">Stock</Label>
            <Input
              type="number"
              {...register("productForm.stock", {
                required: true,
              })}
            />
          </div>
          <div className="mb-2 flex flex-col gap-2">
            <Label className="text-base">Brand</Label>
            <Input
              placeholder="Brand"
              {...register("productForm.brand", {
                required: true,
              })}
            />
          </div>
          <div className="mb-2 flex flex-col gap-2">
            <Label className="text-base">Category</Label>
            <Input
              placeholder="Category"
              {...register("productForm.category", {
                required: true,
              })}
            />
          </div>
          <div className="mb-2 flex flex-col gap-2">
            <Label className="text-base">Thumbnail</Label>
            <Input
              placeholder="Thumbnail"
              {...register("productForm.thumbnail", {
                required: true,
              })}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit(onSubmit, onError)}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddProduct;
