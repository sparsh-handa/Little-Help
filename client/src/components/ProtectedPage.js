import { message } from "antd";
import React, { useEffect, useState } from "react";
import { GetCurrentUser } from "../apicalls/users";
import { useNavigate } from "react-router-dom";
import { getLoggedInUserName } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "../redux/usersSlice";
import { SetLoading } from "../redux/loadersSlice";

function ProtectedPage({ children }) {
  const { currentUser } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getCurrentUser = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await GetCurrentUser();
      dispatch(SetLoading(false));
      if (response.success) {
        message.success(response.message);
        dispatch(SetCurrentUser(response.data));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(SetLoading(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    currentUser && (
      <div>
        <div className="flex justify-between items-center bg-primary text-white px-5 py-5">
          <div>
            <h1
              className="text-4xl cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Little Help
            </h1>
            <span className="text-m py-20">
              {currentUser.userType.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-1">
            
         
            <div className="flex flex-col">
              <div className="flex items-center">
                <span
                  className="text-white cursor-pointer mr-5 text-xl underline px-5"
                  onClick={() => navigate("/profile")}
                >
                  More Information!
                </span>
                <i class="ri-user-line"></i>
                <span className="text-2xl cursor-pointer">
                  {getLoggedInUserName(currentUser)}
                </span>
              </div>
            </div>

            <i
              class="ri-logout-box-r-line cursor-pointer px-3 text-2xl"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            ></i>
          </div>
        </div>

        <div className="px-5 py-2">{children}</div>
      </div>
    )
  );
}

export default ProtectedPage;

