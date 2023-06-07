import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { api } from "@/api/apiClient";
import endpoints from "@/api/endpoints";
import jakeliGerbi from "../../public/img/jakeli-gerbi.png";
import safara from "../../public/img/safara-beqa.jpeg";
import samcxeGerbi from "../../public/img/samcxe-drosha.png";
import jakisCixe from "../../public/img/jakis-cixe.webp";

export function Home() {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    api.get(endpoints.GET_ALL_USERS).then((res) => setUsersData(res.data));
  }, []);

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('https://www.turebi.ge/uploads/photos/tours1/large/59692_1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                ჯაყელ-ათაბაგთა სამთავრო სახლი
              </Typography>
              {/* <Typography variant="lead" color="white" className="opacity-80">
                This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
              </Typography> */}
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard image={jakeliGerbi} description="ჯაყელთა გერბი" />
            <FeatureCard image={safara} description="საფარის ფრესკა" />
            <FeatureCard
              image={samcxeGerbi}
              description="სამცხე-საათაბაგოს დროშა"
            />
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                ჯაყელთა სახლის საზოგადოება
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                ვებ გვერდის მიზანია შეიქმნას საერთო სივრცე, სადაც ჯაყელთა სახლის
                საზოგადოების წევრები შეძლებენ გაწევრიანებას.
                <br />
                <br />
                საიტზე რეგისტრაციის შემდეგ, თქვენ შეძლებთ შეავსოთ თქვენი
                პროფილი, დაწეროთ თვენი მოკლე ბიოგრაფია და საკონტაქტო ინფორმაცია.
                ამით ჩვენ შევძლებთ ერთმანეთთან ურთიერთობას, სიახლეებისა თუ
                სხვადასხვა ინფორმაციის გაცვლას, და ჯაყელთა გაერთიანებას.
              </Typography>
              <Button variant="outlined" onClick={() => navigate("/sign-up")}>
                გაწევრიანდი
              </Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src={jakisCixe}
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    ჯაყის ციხე
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    ჯაყელთა საგვარეულოს ფუძემდებელ ბეშქენ ჩორჩანელის სამფლობელო
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {usersData.length > 0 && (
        <section className="px-4 pb-48 pt-20">
          <div className="container mx-auto">
            <PageTitle heading="ჩვენი წევრები"> </PageTitle>
            <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
              {usersData.map(
                ({ imageUrl, name, surname, location, uid }, idx) =>
                  idx < 4 && (
                    <TeamCard
                      key={uid}
                      img={imageUrl}
                      name={`${name} ${surname}`}
                      position={location}
                      uid={uid}
                      // socials={
                      //   <div className="flex items-center gap-2">
                      //     {socials.map(({ color, name }) => (
                      //       <IconButton key={name} color={color} variant="text">
                      //         <i className={`fa-brands text-lg fa-${name}`} />
                      //       </IconButton>
                      //     ))}
                      //   </div>
                      // }
                    />
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
