import "./avatar.css";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function Avatar({ src, alt }: Props) {
  return (
    <div className={`avatar`}>
      <Image src={src} alt={alt} width={100} height={100} priority />
    </div>
  );
}
