import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import {useDispatch, useSelector } from "react-redux";
import{useQuery} from "@tanstack/react-query";
import{getUserProfile} from "../services/index/users";


function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const{data: profileData, isLoading: profileIsLoading, error: profileError,} = useQuery({
    queryFn: () => {
        return getUserProfile({token: userState.userInfo.token});
    },
    queryKey: ['profile']
  })

  useEffect(() => {
    if (userState.userInfo && !profileIsLoading) {
      navigate("/home");
    }
  }, [navigate, userState.userInfo, profileIsLoading]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "", 
    },
    values:{
      name: profileIsLoading ? "" : profileData.name,
      email: profileIsLoading ? "" : profileData.email,
      bio: profileIsLoading ? "" : profileData.bio,
    },
    mode: "onChange",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitHandler = (data) => {
  };

  return (
    <div>
      <button onClick={openModal} className="my-1 text-xs text-lime-600 lg:hidden">
        Hariri Wasifu
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-row mb-8 items-center justify-center text-zinc-800">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col lg:border-l border-zinc-100 items-center justify-center gap-2 lg:w-2/4"
          >
            <div className="">
              <h1 className="text-3xl font-bold">Taarifa za Wasifu</h1>
            </div>

            <div flex flex-col w-full>
              
            <div className="my-4">
                <input
                  type="text"
                  id="name"
                  autoComplete="off"
                  {...register("name", {
                    minLength: {
                      value: 4,
                      message: "Tumia herufi sio chini ya nne",
                    },
                    required: {
                      value: true,
                      message: "Jina linahitajika!",
                    },
                  })}
                  className={`w-64 px-5 py-3 rounded-full outline-none placeholder-zinc-400 border ${
                    errors.name ? "border-red-400" : "border-zinc-200 "
                  }`}
                  placeholder="Jina"
                />

                {errors.name?.message && (
                  <p className="text-red-500 text-xs mt-1 ml-4">
                    {errors.name?.message}
                  </p>
                )}
              </div>
              <div className="my-4 ">
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  {...register("email", {
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Ingiza barua pepe hakika!",
                    },
                    required: {
                      value: true,
                      message: "Barua Pepe inahitajika!",
                    },
                  })}
                  className={`w-64  px-5 py-3 rounded-full outline-none placeholder-zinc-400 border ${
                    errors.email ? "border-red-400" : "border-zinc-200 "
                  }`}
                  placeholder="Barua Pepe"
                />

                {errors.email?.message && (
                  <p className="text-red-500 text-xs mt-1 ml-4">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="my-4">
                <input
                  type="password"
                  id="password"
                  autoComplete="off"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Weka neno la siri!",
                    },
                    minLength: {
                      value: 8,
                      message: "Tumia herufi sio chini ya nane!",
                    },
                  })}
                  className={`w-64  px-5 py-3 rounded-full outline-none placeholder-zinc-400 border ${
                    errors.password ? "border-red-400" : "border-zinc-200 "
                  }`}
                  placeholder="Neno la siri"
                />
                {errors.password?.message && (
                  <p className="text-red-500 text-xs mt-1 ml-4">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className="font-semibold border hover:bg-lime-600 hover:text-white py-2 px-8 my-2 rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Hariri
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default EditProfile;
