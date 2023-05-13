import PropTypes from "prop-types";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function FeatureCard({ image, description }) {
  return (
    <Card className="rounded-2xl p-10 shadow-lg shadow-gray-500/10">
      <CardBody className="px-8 text-center">
        <img src={image} alt="gerbi" />
        <Typography variant="h6" className="mt-10 mb-2" color="blue-gray">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node  ,
  title: PropTypes.string,
  description: PropTypes.node,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
