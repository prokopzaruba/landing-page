import FlowingConversation from "./FlowingConversation";
import GrowingTogether from "./GrowTogether";
import YourUsers from "./YourUsers";

const InfoSection = () => {
  return (
    <section className="page-section">
      <GrowingTogether />
      <FlowingConversation />
      <YourUsers />
    </section>
  );
};

export default InfoSection;
