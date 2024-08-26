// Import the Logo component from the "../index.js" file
import { Logo } from "../index.js";
<<<<<<< HEAD

=======
 
>>>>>>> ce3fac772431a8c8e9511f59f433c727b141f23c
// Define the LogoWithName component
const LogoWithName = () => {
  return (
    // Container for the logo and the brand name
    <div className="flex-shrink-0 flex flex-row items-center justify-center">
      {/* Render the Logo component */}
      <Logo />
    </div>
  );
};

// Export the LogoWithName component as the default export
export default LogoWithName;
