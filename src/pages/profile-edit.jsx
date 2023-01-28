import { Avatar, Textarea, Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import { api } from "@/api/apiClient";
import endpoints from "@/api/endpoints";
import { useEffect, useState } from "react";
import profileImage from "../../public/img/profile-placeholder.png";
import { Footer } from "@/widgets/layout";

export function ProfileEdit() {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    location: "",
    birthYear: "",
    bio: "",
    fbLink: "",
  });
  const { name, surname, location, birthYear, bio, fbLink } = userData;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name,
      surname,
      birthYear,
      location,
      bio,
    },
    onSubmit: (values) => {
      console.log("bio", values);
      let formData = new FormData();
      formData.append("image", image.data);
      Object.keys(values).forEach((key) => {
        formData.append(`${key}`, "blaa");
      });
      for (const p of formData) {
        console.log("formdata", p);
      }
      api.post(endpoints.UPDATE_USER, formData);
    },
  });

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  useEffect(() => {
    api.get(endpoints.GET_USER).then((res) => setUserData(res.data));
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
            <form onSubmit={formik.handleSubmit} enctype="multipart/form-data">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                    <div className="relative">
                      <div className="-mt-20 w-40">
                        <Avatar
                          src={image.preview ? image.preview : profileImage}
                          alt="Profile picture"
                          variant="circular"
                          className="h-full w-full shadow-xl"
                        />
                        {/* <Input className="h-full w-full shadow-xl" type="file" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                    <Button className="bg-blue-400" type="submit">
                      შენახვა
                    </Button>
                  </div>
                  <div className="w-full px-4 lg:order-1 lg:w-4/12"></div>
                </div>
                <div className="flex w-full flex-col gap-6 p-10">
                  <div className="flex w-full flex-row gap-6">
                    <Input
                      label="სახელი"
                      type="text"
                      id="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    <Input
                      label="გვარი"
                      type="text"
                      id="surname"
                      value={formik.values.surname}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="flex w-full flex-row gap-6">
                    <Input
                      label="დაბადების წელი"
                      type="number"
                      id="birthYear"
                      value={formik.values.birthYear}
                      onChange={formik.handleChange}
                    />
                    <Input
                      label="საცხოვრებელი ადგილი"
                      type="text"
                      id="location"
                      value={formik.values.location}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="flex w-full flex-row gap-6">
                    <Input
                      label="Facebook ლინკი"
                      type="text"
                      id="fbLink"
                      value={formik.values.fbLink}
                      onChange={formik.handleChange}
                    />
                    <Input
                      label="პროფილის სურათი"
                      type="file"
                      // id="location"
                      // value={formik.values.location}
                      onChange={handleFileChange}
                    />
                  </div>
                  <Textarea
                    size="lg"
                    label="ბიოგრაფია"
                    resize
                    className="h-64"
                    id="bio"
                    value={formik.values.bio}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default ProfileEdit;
