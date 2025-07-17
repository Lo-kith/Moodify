// import React from 'react'

// async function EmailAPI() {
   
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//  const serviceID = 'service_pj6epu2'; 
//     const templateID = "template_mk8fxhd";
//     const publicKey = "HiUkx_TARNLGazlyw";
 
//     const data={
//         service_id: serviceID,
//         template_id: templateID,
//         user_id: publicKey,
//         template_params: {
//             from_name: name,
//             from_email: email,
//             to_name: "Moodify Team",
//             message: message,
//         }
//     };
//     }
//     try{
//         const res= await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
//         console.log(res.data);
//         setName('');
//         setEmail('');
//         setMessage('');
//         alert('✅ Email sent successfully!');
//     }catch (error) {
//         console.error("Error sending email:", error);
//     }



//     return (
//         <form onSubmit={handleSubmit} className='emailForm'>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         />
//       <input
//         type="email"
//         placeholder="Your Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         />
//       <textarea
//         placeholder="Your Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         />
//       <button type="submit">Send Email</button>
//     </form>     
//     )

// }
