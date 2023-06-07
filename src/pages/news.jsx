import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { useUser } from "@/context/context";

export function News() {
  const isAdmin = useUser((state) => state.isAdmin);
  const navigate = useNavigate();

  const buttonStyles = {
    backgroundColor: "rgb(33 150 243)",
    position: "absolute",
    right: 20,
    padding: 10,
    borderRadius: 8,
    fontSize: 11,
    color: "white",
  };

  const handleAddNews = () => navigate("/add-news");

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
                <Typography variant="h2">ახალი ამბები</Typography>
                {isAdmin && (
                  <button style={buttonStyles} onClick={handleAddNews}>
                    სიახლის დამატება
                  </button>
                )}
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

export default News;
