import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";
import { BASE_URL } from "@/api/apiClient";
import profileImage from "../../../public/img/profile-placeholder.png";
import { useNavigate } from "react-router-dom";

export function TeamCard({ img, name, position, socials, uid }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${uid}`);
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="text-center"
      onClick={handleClick}
    >
      <Avatar
        src={img.length > 0 ? `${img}` : profileImage}
        alt={name}
        size="xxl"
        className="h-full w-full shadow-lg shadow-gray-500/25"
        style={{
          objectFit: img.length > 0 ? "cover" : "contain",
          cursor: "pointer",
        }}
      />
      <Typography variant="h5" color="blue-gray" className="mb-1 mt-6">
        {name}
      </Typography>
      {position && (
        <Typography className="font-normal text-blue-gray-500">
          {position}
        </Typography>
      )}
      {socials && <div className="mx-auto mt-5">{socials}</div>}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
