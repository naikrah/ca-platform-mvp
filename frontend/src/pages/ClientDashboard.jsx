import InfoCard from "../components/InfoCard.jsx";

const ClientDashboard = () => {
  return (
    <InfoCard title="Client Dashboard">
      <ul>
        <li>Upcoming booking: GST filing</li>
        <li>Pending document: Bank statements</li>
      </ul>
    </InfoCard>
  );
};

export default ClientDashboard;
