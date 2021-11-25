import Image from 'next/image';

export const ReviewComp = ({ children, username }) => {
  return (
    <div className="flex flex-row items-start pt-4 mb-4">
      {/* <Image
        className={'rounded-2xl'}
        src={src}
        alt={alt}
        width={55}
        height={50}
        layout="fixed"
      ></Image> */}

      <p className={`font-body text-xs tracking-wide ml-0 text-WHITE w-full`}>
        <span className="text-GREENT block">{username}</span>
        {children}
      </p>
    </div>
  );
};
