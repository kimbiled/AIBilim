<link rel="stylesheet" href="https://cdn.plyr.io/3.6.3/plyr.css" />;
<script src="https://cdn.plyr.io/3.6.3/plyr.polyfilled.js"></script>;
const Video = () => {
	return (
		<div className="flex justify-between flex-wrap gap-[20px]">
			<div>
				<div className="w-[770px] h-[420px] bg-black rounded border-2 border-solid border-#C0C0C0 mb-[18px]">
					<video className="w-full h-full" controls>
						<source src="../src/assets/videoplayback.mp4" type="video/mp4" />
					</video>
				</div>

				<h3 className="text-[25px] text-smrtBlack leading-[150%]">Работа над ошибками Writing Task 1</h3>
			</div>
			<div className="rounded border-2 border-solid border-#C0C0C0 pt-[35px] py-[40px] px-[40px] w-[415px] lg:mb-[60px] game-box-shadow">
				<h2 className="text-smrtBlack text-[25px] leading-[150%] mb-[15px]">
					Работа над ошибками Writing Task 1
				</h2>
				<p className="text-smrtBlack text-[16px] font-normal leading-[160%]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus tincidunt augue sed blandit.
					Maecenas tristique diam justo, id dignissim velit fermentum id. Integer sollicitudin, erat ut
					convallis rutrum, risus magna pretium tortor, non facilisis neque nulla semper leo. Sed ut arcu
					lectus. Morbi eu diam id urna viverra sollicitudin. Donec at venenatis risus, non interdum justo.{" "}
				</p>
			</div>
		</div>
	);
};

export default Video;
