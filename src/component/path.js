import { useState } from "react";



const path = () => {

    const [form, setForm] = useState({
       email:'',userName:'',number:'',select:'',checkbox:'' ,radio:'',

    });

    const handleSubmit = (put) => { 

      put.preventDefault();
      alert(`Submitted: ${FormData}`);

    };

    const handleChange = (put) => {
      setForm({...form,[put.target.name]: put.target.value});
    };


    return(
       
      <div>
        <form>
          <div>
             <label >Email</label>
             <input type="email" name="email" value={form.email} onChange={(put) => handleChange(put)}/>
          </div>
          





        
        
        
        </form>
     </div>


)





















}

// export default function LoginForm() {
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

  
//   const handleSubmit = (e) => {
//     e.preventDefault(); 

    
//     console.log("Email:", email);
//     console.log("Password:", password);

    
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-4 p-6 border rounded-lg shadow-lg w-80"
//       >
//         <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        
//         <label htmlFor="email" className="text-sm font-medium">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="border rounded p-2"
//           placeholder="Enter your email"
//         />

  
//         <label htmlFor="password" className="text-sm font-medium">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="border rounded p-2"
//           placeholder="Enter your password"
//         />

        
//         <button
//           type="submit"
//           className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
