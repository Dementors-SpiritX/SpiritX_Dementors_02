import React from "react";
import LoginForm from "./auth/login";


export default function Home() {
  return(
    <>
    <section
				id='users'
				style={{
					backgroundImage: "url('/background.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '100vh',
					// position: 'absolute',
					// top: 728,
					// left: 0,
					width: '100%',
					zIndex: -1,
				}}
			>
				{/* Encapsulate login into a flex box */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
					}}
				>
					<LoginForm />
				</div>
			</section>
    </>
  );
}