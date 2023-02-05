import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { api } from "@/api/apiClient";
import endpoints from "@/api/endpoints";
import { TeamCard } from "@/widgets/cards";

import { Footer } from "@/widgets/layout";

export function Members() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    api.get(endpoints.GET_ALL_USERS).then((res) => setUsersData(res.data));
  }, []);

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-col justify-center justify-items-center">
                <Typography variant="h2" className="mt-10 text-center">
                  ჯაყელთა სახლის წევრები
                </Typography>
                <div className="flex w-full justify-center px-4 ">
                  <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                    {usersData.map(
                      ({ imageUrl, name, surname, location, uid }) => (
                        <TeamCard
                          key={uid}
                          img={imageUrl}
                          name={`${name} ${surname}`}
                          position={location}
                          uid={uid}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="w-full px-4 lg:order-1 lg:w-4/12"></div>
              </div>
              <div className="flex w-full flex-col gap-6 p-10"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Members;
