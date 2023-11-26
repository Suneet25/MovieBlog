"use client";
import { ToastInfo, ToastSuccess } from "@/components/Toast";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Contact = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });
  let { name, email, website, comment } = data;
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !website) {
      ToastInfo("Please fill the reaquired field");
      return;
    }

    ToastSuccess("Message sent");

    setData({ name: "", email: "", website: "", comment: "" });
  };
  return (
    <div className="max-w-7xl m-auto py-10 px-10  lg:px-0">
      <ToastContainer />
      <h1 className="font-semibold text-3xl text-gray-700">Contact</h1>
      <div className="mt-5 text-gray-700 ">
        <p>
          Are you a cinephile with a passion for film writing? We’d love to hear
          from you and do welcome review and feature submissions!
        </p>
        <p className="mt-5">
          Whilst we cannot, at this time, pay for content, please do not
          hesitate to get in touch and join our community.
        </p>
      </div>
      <div className="mt-3">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label className="text-orange-700">
            Name<span className="text-red">*</span>
          </label>
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            className="bg-white border-2 border-gray-400 py-3 px-3 rounded-lg"
          />
          <label className="text-orange-700">
            Email<span className="text-red">*</span>
          </label>
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            className="bg-white border-2 border-gray-400 py-3 px-3 rounded-lg"
          />
          <label className="text-orange-700">
            Website<span className="text-red">*</span>
          </label>
          <input
            name="website"
            value={data.website}
            onChange={handleChange}
            className="bg-white border-2 border-gray-400 py-3 px-3 rounded-lg"
          />
          <label className="text-orange-700">Comment</label>
          <textarea
            name="comment"
            value={data.comment}
            onChange={handleChange}
            className="bg-white border-2 border-gray-400 py-5 px-3 rounded-lg"
          />
          <a href="mailto:suneetpanigrahi53@gmail.com">
            <button
              type="submit"
              className="px-3 py-3 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-800"
            >
              SUBMIT
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contact;
