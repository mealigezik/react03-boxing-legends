import { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics = [] }) => {
  const [showStatistics, setShowStatistics] = useState(false);

  return (
    <Card className="rounded-3 m-auto player-card">
      <button
        type="button"
        className="player-card-toggle"
        onClick={() => setShowStatistics((visible) => !visible)}
        aria-expanded={showStatistics}
        aria-label={`${showStatistics ? "Hide" : "Show"} statistics for ${name}`}
      >
        {!showStatistics ? (
          <Card.Img variant="top" src={img} alt={name} loading="lazy" className="player-logo" />
        ) : (
          <ul className="my-auto">
            {statistics.map((statistic, index) => (
              <li key={`${name}-stat-${index}`} className="list-unstyled h5 text-start m-4">
                {statistic}
              </li>
            ))}
          </ul>
        )}
        <Card.Footer>
          <Card.Title>{name}</Card.Title>
        </Card.Footer>
      </button>
    </Card>
  );
};

export default PlayerCard;
