import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: " 100vh" }}>
      <div>
        <img
          src="https://i.pinimg.com/originals/01/d3/c2/01d3c269525c9c98234133d440d4bd7b.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3cbc28" size={60} />
      </div>
    </center>
  );
};

export default Loading;
