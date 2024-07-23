export default function Team({title, subtitle, text, img1, img2, img3}) {
	return (
		<>
			<div id="team" className="mt-[5rem] px-[4rem]">
				<div id="team-text">
					<span id="text1" className="poppins">
						{title}
					</span>
					<span id="text2" className="poppins">
						{subtitle}
					</span>
					<span id="text3" className="poppins">
						{text}
					</span>
				</div>
				<div id="team-img-container">
					{/* <div id="left"></div> */}
					<img className="team-img" src={img1} />
					<img className="team-img" src={img2} />
					<img className="team-img" src={img3} />
				</div>
			</div>
		</>
	);
}
