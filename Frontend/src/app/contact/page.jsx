import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl m-auto py-10 px-10 md:px-0 lg:px-0">
      <h1 className="font-semibold text-3xl">Contact</h1>
      <div className="mt-5">
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
        <form className="flex flex-col gap-3">
          <label>Name(required)</label>
          <input className="bg-white border-2 border-black-200 py-3 px-3 rounded-lg" />
          <label>Email(required)</label>
          <input className="bg-white border-2 border-black-200 py-3 px-3 rounded-lg" />
          <label>Website</label>
          <input className="bg-white border-2 border-black-200 py-3 px-3 rounded-lg" />
          <label>Comment(required)</label>
          <textarea className="bg-white border-2 border-black-200 py-5 px-3 rounded-lg" />
          <a href="mailto:suneetpanigrahi53@gmail.com">
            <button className="px-3 py-3 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-800">
              SUBMIT
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contact;