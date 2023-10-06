"use client";
import React from "react";
import { useAuth } from "./providers/supabase-auth-provider";
import Image from "next/image";

const Profile = () => {
  let { user, serverSession, signOut } = useAuth();

  return (
    <div>
      <div className="max-w-7xl m-auto flex flex-col md:flex-row lg:flex-row justify-center items-center py-20 px-10 gap-10">
        <div className="card card-side bg-white-100 shadow-xl">
          <figure>
            <Image
              src={user?.avatar_url}
              height={300}
              width={300}
              style={{ width: "300px", height: "300px" }}
              alt="profileImage"
            />
          </figure>
        </div>
        <div>
          <div className="card-body">
            <h2 className=" text-orange-700">
              Name:-
              <span className="text-gray-700">
                {serverSession?.user?.app_metadata?.provider === "github"
                  ? serverSession.user.user_metadata.full_name
                  : ""}
              </span>
            </h2>
            <p className=" text-orange-700">
              Email:-
              <span className="text-gray-700">
                {serverSession?.user?.app_metadata?.provider === "github"
                  ? serverSession.user.user_metadata.email
                  : ""}
              </span>
            </p>
            <p className="text-orange-700">
              Verified:-
              <span className="text-gray-700">
                {serverSession?.user?.app_metadata?.provider === "github"
                  ? serverSession.user.user_metadata.email_verified === true
                    ? "Yes"
                    : "No"
                  : ""}
              </span>
            </p>
            <div className="card-actions justify-end" onClick={signOut}>
              <button className="btn  bg-orange-500 text-white hover:bg-orange-600">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
