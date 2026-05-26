import { StoryPanels } from "./sections/StoryPanels";
import { IPODashboard } from "./sections/IPODashboard";

function App() {
  return (
    <main className="min-h-screen bg-pitchBlack text-white">
      <StoryPanels />
      <IPODashboard />
    </main>
  );
}

export default App;
