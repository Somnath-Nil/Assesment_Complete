import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const CardDetailsComponent = () => {
    const location = useLocation();
    console.log('loaction', location);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        getUserData();
    }, [location]);

    const getUserData = async () => {
        const user = location?.state?.userName
        await fetch(
            `https:/api.github.com/users/${user}`
        ).then(response => response.json())
            .then(data => setUserData(data))
            .catch(
                err => console.log(err)
            )
    }
    console.log('userData', userData);
    return (
        <>
            <div className="flex justify-center py-10">
                <div className="flex flex-col justify-center gap-4 border rounded-md bg-gray-500 p-10">
                    <div className="rounded-full bg-gray-200 h-40 w-40">
                        <img src={userData?.avatar_url} alt="photo" className="rounded-full h-fit w-fit object-fill" />
                    </div>
                    <div className="flex fap-2 text-black">
                        <span className="text-lg font-bold">
                            username:-
                        </span>
                        <span className="text-md from-neutral-800">
                            {userData?.login}
                        </span>
                    </div>
                    <div className="flex fap-2 text-black">
                        <span className="text-lg font-bold">
                            Name:-
                        </span>
                        <span className="text-md from-neutral-800">
                            {userData?.name}
                        </span>
                    </div>
                    <div className="flex fap-2 text-black">
                        <span className="text-lg font-bold">
                            No. of public respos:-
                        </span>
                        <span className="text-md from-neutral-800">
                            {userData?.public_repos}
                        </span>
                    </div>
                    <div className="flex fap-2 text-black">
                        <span className="text-lg font-bold">
                            No.of public gists:-
                        </span>
                        <span className="text-md from-neutral-800">
                            {userData?.public_gists}
                        </span>
                    </div>
                    <div className="flex fap-2 text-black">
                        <span className="text-lg font-bold">
                            Profile Created At:-
                        </span>
                        <span className="text-md from-neutral-800">
                            {userData?.created_at ? userData?.created_at : '-'}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )

}
export default CardDetailsComponent;