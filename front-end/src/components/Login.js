import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "../components/Modal";
import Image5 from "../assets/image5.png";
import Google from "../assets/google.svg";
import Apple from "../assets/apple.svg";
import Facebook from "../assets/facebook.svg";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/index/users";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/reducers/userReducers";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  useEffect(() => {
    if (userState.userInfo) {
      navigate("/home");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
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
    const { email, password } = data;
    mutate({ email, password });
  };

  return (
    <div>
      <button onClick={openModal} className="">
        Ingia
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-row mb-8 items-center justify-center text-zinc-800">
          <div className="hidden mr-4 lg:flex lg:w-2/4">
            <img src={Image5} alt="Image5" />
          </div>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col lg:border-l border-zinc-100 items-center justify-center gap-2 lg:w-2/4"
          >
            <div className="">
              <h1 className="text-3xl font-bold">Ingia!</h1>
            </div>

            <div flex flex-col w-full>
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
              <div className="text-xs px-5">
                <Link to="#">
                    Umesahau neno la siri?
                </Link>
              </div>
            </div>
            <div className="flex flex-col  items-center justify-center">
              <div className="my-2">or</div>
              <div className="flex flex-row items-center gap-8 my-2">
                <div className="border border-zinc-100 p-4 rounded-lg">
                  <img alt="Google Signup" src={Google} width={30} />
                </div>
                <div className="border border-zinc-100 p-4 rounded-lg ">
                  <img alt="Apple Signup" src={Apple} width={30} />
                </div>
                <div className="border border-zinc-100 p-4 rounded-lg">
                  <img alt="Facebook Signup" src={Facebook} width={30} />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="font-semibold border hover:bg-lime-600 hover:text-white py-2 px-8 my-2 rounded-full disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Ingia
            </button>

            <div className="m-4">
               Huna akaunti? <span className="text-lime-600">Jiunge</span>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
