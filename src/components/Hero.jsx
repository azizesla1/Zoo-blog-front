import "./Hero.css";

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      title: "Zoo Establishment",
      text: "1985: The City Zoo was founded with a mission to conserve and educate.",
      side: "right",
    },
    {
      id: 2,
      title: "First Animal Arrivals",
      text: "1986: The zoo welcomed its first residents, including lions, giraffes, and monkeys.",
      side: "left",
    },
    {
      id: 3,
      title: "Reptile House Opens",
      text: "1990: A state-of-the-art Reptile House was inaugurated, showcasing a diverse collection of reptiles and amphibians.",
      side: "right",
    },
    {
      id: 4,
      title: "Conservation Programs Expand",
      text: "2005: The zoo expanded its conservation efforts, focusing on endangered species breeding programs.",
      side: "left",
    },
    {
      id: 5,
      title: "New Primate Exhibit",
      text: "2012: A spacious and enriching primate exhibit opened, providing a naturalistic habitat for gorillas and chimpanzees.",
      side: "right",
    },
    {
      id: 6,
      title: "Education Center Launch",
      text: "2018: A dedicated Education Center was launched to further the zoo's commitment to conservation education.",
      side: "left",
    },
  ];
  return (
    <div className="container">
      <h1>
        <span>The </span>
        <span>Zoo </span>
        <span>History </span>
        <span>of</span>
        <br />
        <span>The </span>
        <span>City </span>
        <span>of </span>
        <span>San Francisco</span>
        <br />
        <h2 className="timeline-main-title">Zoo History 🕰️</h2>
      </h1>

      <div className="timeline-wrap">
        {timelineData.map((item) => (
          <div key={item.id} className={`timeline-item ${item.side}`}>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
