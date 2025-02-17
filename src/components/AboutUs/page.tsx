export function AboutUs() {
  return (
    <div className="m-10 text-center flex-grow">
      <h2 className="font-semibold">About us</h2>
      <div className="flex justify-center">
        <div className="p-5 text-center">
          <img
            src="./img/sydney.JPG"
            alt=""
            className="w-16 h-16 object-cover rounded-[50%]"
          />
          <p>Yo-</p>
        </div>
        <div className="p-5 text-center">
          <img
            src="./img/stone.JPG"
            alt=""
            className="w-16 h-16 object-cover rounded-[50%]"
          />
          <p>Marumi</p>
        </div>
      </div>
    </div>
  );
}
