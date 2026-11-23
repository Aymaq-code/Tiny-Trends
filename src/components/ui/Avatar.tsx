import Image from "next/image";

import "@/src/styles/components/ui/avatar.css";
type AvatarProps = {
  avatarUrl?: string | null;
};

export default function Avatar({ avatarUrl }: AvatarProps) {
  if (!avatarUrl) return null;

  return (
    <div className="avatar">
      <Image
        src={avatarUrl}
        alt="User profile"
        width={40}
        height={40}
        className="avatar-image"
      />
    </div>
  );
}
