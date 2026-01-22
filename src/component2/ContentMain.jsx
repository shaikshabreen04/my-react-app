import Calculator from "../addition";
import Greeting from "../greeting";
import NameChanger from "../namechanger";
import NameInput from "../nameinput";

export default function Content({ activePage }) {
  return (
    <>
    <div>this is content page</div>
    <main className="content">
    {activePage === "calculator" && <Calculator />}
      {activePage === "greetings" && <Greeting />}
      {activePage === "namechanger" && <NameChanger />}
      {activePage === "nameinput" && <NameInput />}
    </main>
    </>
  );
}
