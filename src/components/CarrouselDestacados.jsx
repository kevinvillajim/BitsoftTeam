import Button from "./Button";
export default function CarrouselDestacados({ destacados, verTodos }) {
  return (
    <>
      <div className="grid grid-cols-4 space-x-4 overflow-x-auto px-[2rem]">
        {destacados.map((destacado, index) => (
          <div
            className="p-4 rounded-lg border border-1 shadow-lg"
            key={index}
          >
            <div className="w-full h-[250px]">
              <img
                src={destacado.img}
                alt="4K ColorVu Fixed Bullet Solar Power 4G Network Camera Kit"
                className="mb-4 object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{destacado.title}</h3>
            <p className="text-muted-foreground mb-4">
              {destacado.description}
            </p>
            <Button
              link={destacado.link}
              title="cotizar"
              text="Cotizar"
              dark={true}
            />
          </div>
        ))}
      </div>
      {verTodos ? (
        <div className="text-center mt-8">
          <a
            href="/productos"
            className="text-primary hover:underline"
          >
            Ver Todos &rarr;
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
