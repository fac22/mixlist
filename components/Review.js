import Image from 'next/image';

export const Review = ({ children, src, alt, username }) => {
  return (
    <div className="flex flex-row items-start pt-4 mb-4">
      <Image src={src} alt={alt} width={55} height={50} layout="fixed"></Image>

      <p className={`font-body text-xs tracking-wide ml-4 text-WHITE w-full`}>
        <span className="text-GREENT block">{username}</span>
        {children}
      </p>
    </div>
  );
};
