import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/assets/icons/logo/tijarico-logo.png" // path from public folder
      alt="TijariCo Logo"
      width={150}
      height={50}
      priority
    />
  );
};

export default Logo;
