"use client";
import InputComponent from "@/components/InputComponent";
import SelectComponent from "@/components/SelectComponent";
import TextEditor from "@/components/TextEditor";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";

function admin() {
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ upload, setUpload ] = useState("")

  const [inputFields, setInputFields] = useState({
    name: "",
    subtitle: "",
    discount: "",
    price: "",
    description:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeDescription = (e) => {
    setDescription(e);
    setInputFields((prev) => ({
      ...prev,
      description: e,
    }));
  };

  const handleChangeUpload = (e) => {
    setUpload(e);
    setInputFields((prev) => ({
      ...prev,
      upload: e,
    }));
  };

  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "shoes_website");
    data.append("cloud_name", "dt0dxjbhy");
    const uploadImage = fetch(
      "https://api.cloudinary.com/v1_1/dt0dxjbhy/image/upload",
      {
        method: "post",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div>
      <Wrapper>
        <div className="text-center mx-auto my-8 md:mt-0 min-h-[100vh]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Admin Pannel
          </div>
          <div className="flex flex-col gap-[24px] text-start">
            <div className="relative">
              <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                Upload Image
              </p>
              <input
                type="file"
                 onChange={(e) => setImage(e.target.files[0])}
                className="border text-black placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
              />
              <button
                className="py-2 px-4 mt-2 rounded-lg bg-black text-white text-sm font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                onClick={submitImage}
              >
                upload
              </button>
            </div>
            <div className="relative">
              <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                Upload Images
              </p>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="border text-black placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
              />
              <button
                className="py-2 px-4 mt-2 rounded-lg bg-black text-white text-sm font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                onClick={submitImage}
              >
                upload
              </button>
            </div>
            <InputComponent
              label={"Name"}
              placeholder={"Enter product name"}
              value={inputFields.name}
              onChange={handleChange}
              name={"name"}
            />
            <InputComponent
              label={"Subtitle"}
              placeholder={"Enter product subtitle"}
              value={inputFields.subtitle}
              onChange={handleChange}
              name={"subtitle"}
            />
            <InputComponent
              label={"Price"}
              placeholder={"Enter product price"}
              value={inputFields.price}
              onChange={handleChange}
              name={"price"}
            />
            <InputComponent
              label={"Discount price"}
              placeholder={"Enter product discounted price"}
              value={inputFields.discount}
              onChange={handleChange}
              name={"discount"}
            />
            <SelectComponent label={"Size"} placeholder="Select size" />
            <TextEditor
              label={"Description"}
              placeholder={"Enter product description"}
              value={description}
              onChange={handleChangeDescription}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default admin;
