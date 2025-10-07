import NavBar from "../components/Nav/NavBar";
export default function Home() {
  return ( 
    <div id='root' className="p-4">
      <NavBar />
        <h1 className="text-3xl font-bold mb-5">Home Page</h1>
    </div>
  );
}