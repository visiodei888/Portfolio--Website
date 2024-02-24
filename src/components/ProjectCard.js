import { BrowserRouter as Router } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Link, Red} from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link to="/fullstack">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </Link>
    </Col>
  
  )
}