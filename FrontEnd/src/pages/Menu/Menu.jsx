import { MenuImage } from "../../data";

export default function Menu() {
  return (
    <div className="tools mt-32 mb-5">
      <h1 className="text-4xl/snug font-bold text-center text-[#589507]">
        List Menu
      </h1>
      <div className="tools-box md:mt-14 mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
        {MenuImage.map((menu) => (
          <div
            className="flex items-center justify-between group "
            key={menu.id}
          >
            <img
              src={menu.gambar}
              alt="Tools Image"
              className="w-[300px] h-[300px] "
              loading="lazy"
            />
            <div>
              <h4>{menu.name}</h4>
              <p>{menu.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
