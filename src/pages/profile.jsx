import { Avatar, Typography, Button } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { useEffect, useState } from "react";
import { api, BASE_URL } from "@/api/apiClient";
import endpoints from "@/api/endpoints";
import profileImage from "../../public/img/profile-placeholder.png";

export function Profile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    location: "",
    birthYear: "",
    bio: "",
    imageUrl: null,
    isAdmin: false,
  });
  const { name, surname, location, birthYear, bio, imageUrl } = userData;

  const navigate = useNavigate();
  const clickHandler = () => navigate("/profile-edit");

  useEffect(() => {
    api
      .get(`${endpoints.GET_USER}/${userId || ""}`)
      .then((res) => setUserData(res.data));
  }, [userId]);

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src={imageUrl ? `${imageUrl}` : profileImage}
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                {
                  <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                    {!userId && (
                      <Button className="bg-blue-400" onClick={clickHandler}>
                        რედაქტირება
                      </Button>
                    )}
                  </div>
                }

                <div className="w-full px-4 lg:order-1 lg:w-4/12"></div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  {`${name} ${surname}`}
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    {`${location}, ${birthYear}`}
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      {bio}
                    </Typography>
                  </div>
                </div>
              </div>
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

export default Profile;
