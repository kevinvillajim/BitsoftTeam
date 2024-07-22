export default function BannerS({ img, title, content, position, height }) {
  return (
    <>
      <div
        className={`w-screen flex justify-center items-center bg-fixed flex-col h-[${height}]`}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: `${position}`,
        }}
      >
        <div>
          <h1 className="font-bold text-[40px] text-white">{title}</h1>
        </div>
        <div className="my-[2rem]">
          <p className="text-[25px] text-white">{content}</p>
        </div>
      </div>
    </>
  );
}
