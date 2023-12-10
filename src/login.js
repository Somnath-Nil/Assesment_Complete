import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginComponent = () => {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const validation = () => {
        if (userName === '') {
            alert('Please enter username');
        }
        else {
            navigate('/card', {
                state: {
                    userName: userName
                }
            })
        }

    }
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="h-64 w-64 bg-gray-300 rounded-md py-4 px-6">
                    <div className="flex justify-center flex-col text-black gap-4">
                        <div>
                            <label for="username" class="mb-2 text-sm font-medium  text-gray-900" >Please enter username</label>
                            <input type="text" id="username"
                                className=" bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-sm w-full p-2.5 mt-1"
                                placeholder="John"
                                value={userName} onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                className="w-32 bg-blue-500 rounded-md h-10"
                                onClick={() => validation()}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginComponent;