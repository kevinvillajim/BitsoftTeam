export default function Title({ title }) {
  return (
    <>
      <div className="bg-[#3E3D3F] w-full flex align-center justify-center py-[2rem] shadow-md shadow-[#D71731]">
        <h1 className="text-[40px] text-[#F47521] fontTitle">{title}</h1>
      </div>
    </>
  );
}
