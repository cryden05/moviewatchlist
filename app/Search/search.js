import Image from "next/image";
import logo from"../../assets/user.png";

export default function Page() {
    return (
        <main>
            <div>
               <h1>NCR Movie Watchlist</h1>
               <p>THIS IS THE SICK ASS SEARCH BAR</p>
               <h1>HELLO TAILWIND</h1>

               <input type="text" placeholder="Enter Movie Title..."></input>
               <button>Search</button>
               <div className="fixed top-4 right-4 w-20 h-20 bg-red-500">
                    <Image 
                    src={logo} 
                    alt="Profile" 
                    width={50}
                    height={50}
                    className="rounded-full flex"/>
               </div>
            </div>
        </main>
    );
}