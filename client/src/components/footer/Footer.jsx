import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Hotels</li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Cabins</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental </li>
          <li className="fListItem">Flight Find</li>
          <li className="fListItem">Restaurant reservations </li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 </div>
    </div>
  );
};

export default Footer;
