import Updatestudent from "./Updatestudent";
import Deletestudent from "./Deletestudent";
import Addstudent from "./Addstudent";
export default function Content1({ activepage }) {
  return (
    <>
    <div>Manipulate Data</div>
    <main className="content">
      {activepage === "add" && <Addstudent />}
      {activepage === "delete" && <Deletestudent />}
      {activepage === "update" && <Updatestudent />}
    </main>
    </>
  );
}
