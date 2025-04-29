// src/components/RootLayout.jsx
import ClickSpark from "../animations/ClickSpark";
import Cursor from "./Cursor";

const RootLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Cursor />
      <ClickSpark
        sparkColor="rgba(13, 110, 253, 0.7)"
        sparkSize={8}
        sparkRadius={20}
        sparkCount={6}
        duration={500}
        extraScale={1.2}
      />
      {children}
    </div>
  );
};

export default RootLayout;
