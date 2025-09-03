import { MenuImage } from "../../data";

export default function Menu() {
  return (
    <div className="tools mt-32 mb-5 min-h-screen">
      <h1 className="text-4xl/snug font-bold text-center text-[#589507]">
        List Menu
      </h1>
      <div className="md:mt-14 mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-4 gap-y-8 max-w-[1280px] mx-auto">
        {MenuImage.map((menu) => (
          <div className="flex flex-col items-center text-center" key={menu.id}>
            <img
              src={menu.gambar}
              alt="Tools Image"
              className="w-[250px] h-[250px] rounded-full object-cover "
              loading="lazy"
            />
            <h4 className="mt-2 font-semibold">{menu.name}</h4>
            <p className="text-sm text-gray-600">{menu.ket}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
