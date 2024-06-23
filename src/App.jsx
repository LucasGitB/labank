import { ArrowLeft, Dot } from "lucide-react";

export default function App() {
  return (
    <div className="flex justify-center ">
      <div className="h-screen w-full">
        <div className="flex flex-col text-white gap-5 bg-slate-950 h-full p-4">
          <div className="flex justify-center text-xl font-bold">
            <h1>LaBank</h1>
          </div>
          <br />
          <h2 className="font-bold">Votre porte feuille virtuelle</h2>
          <div className="flex-col sm:p-16 flex gap-4">
            <div className="bg-gradient-to-r from-blue-300 to-purple-500  w-full rounded-lg h-48 flex flex-col justify-between sm:w-[400px]">
              <div className="p-4 flex justify-between">
                <div className="text-xl font-bold">LaBank</div>
                <div className="rounded-3xl border border-white p-1 px-2 text-sm">
                  virtuelle
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <span className="text-3xl">....</span>
                  <span>3567</span>
                </div>
                <div className="w-16">
                  <img
                    src="https://logo-marque.com/wp-content/uploads/2020/04/Visa-Embl%C3%A8me.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-300 to-purple-500  w-full rounded-lg h-48 flex flex-col justify-between sm:w-[400px]">
              <div className="p-4 flex justify-between">
                <div className="text-xl font-bold">LaBank</div>
                <div className="rounded-3xl border border-white p-1 px-2 text-sm">
                  virtuelle
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <span className="text-3xl">....</span>
                  <span>3567</span>
                </div>
                <div className="w-16">
                  <img
                    src="https://logo-marque.com/wp-content/uploads/2020/04/Visa-Embl%C3%A8me.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
