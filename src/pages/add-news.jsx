import { useState } from "react";
import { useFormik } from "formik";
import {
  Typography,
  Input,
  Textarea,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import profileImage from "../../public/img/profile-placeholder.png";
import { BASE_URL } from "@/api/apiClient";
import endpoints from "@/api/endpoints";

export function AddNews() {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const imageUrl = "";

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title,
      description,
      text,
      imageUrl,
    },
    onSubmit: (values) => {
      console.log("bio", values);
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(`${key}`, values[key]);
      });
      formData.append("image", image.data);
      api.post(endpoints.ADD_NEWS, formData).then(() => showAlert());
    },
  });

  const showAlert = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 4000);
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                  position: "relative",
                }}
              >
                <Typography variant="h2">სიახლის დამატება</Typography>
              </div>
              <div className="flex w-full flex-col gap-6 p-10">
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <div style={{ width: 200 }}>
                    <Avatar
                      src={
                        image.preview
                          ? image.preview
                          : imageUrl
                          ? `${BASE_URL}/images/${imageUrl}`
                          : profileImage
                      }
                      alt="Profile picture"
                      className="h-full w-full shadow-xl"
                    />
                  </div>
                  <Input
                    label="ფოტოს ატვირთვა"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
                <Input
                  label="სათაური"
                  type="text"
                  id="title"
                  // value={formik.values.location}
                  // onChange={formik.handleChange}
                />
                <Textarea
                  size="lg"
                  label="მოკლე აღწერა"
                  resize
                  className="h-64"
                  id="description"
                  // value={formik.values.bio}
                  // onChange={formik.handleChange}
                />
                <Textarea
                  size="lg"
                  label="ტექსტი"
                  resize
                  className="h-64"
                  id="text"
                  // value={formik.values.bio}
                  // onChange={formik.handleChange}
                />

                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-blue-400" type="submit">
                    შენახვა
                  </Button>
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

export default AddNews;
