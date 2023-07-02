import styles from "../style";
import { heroPhoto } from "../assets";

const Hero = () => {
	return (
		<section id="home" className={`   `} style={{ backgroundColor: "white" }}>
			<div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
				<div className={` ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
					<div className="flex flex-row justify-between items-center w-full">
						<h1 className="flex-1 font-lato font-semibold ss:text-[72px] text-[52px] text-smrtBlack ss:leading-[80.8px] leading-[45px]">
							Подготовка к SAT/IELTS в<br className="sm:block hidden" />{" "}
							<span className="text-gradient text-primary"> игровой форме</span>{" "}
						</h1>
					</div>

					<p
						className={`font-lato font-semibold text-dimWhite text-[26px] leading-[40.8px] max-w-[670px] mt-10 text-primary`}
					>
						Используя новый подход к обучению c ИИ и игровыми режимами, вы сможете получить желаемый балл
					</p>

					<div className="flex  w-full py-10 mt-10 space-x-20 ">
						<button className="group relative h-12 w-48 overflow-hidden rounded-md bg-smrtBlue text-lg font-bold text-white">
							Начать
							<div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
						</button>
						<button className="group relative h-12 w-48 overflow-hidden rounded-md bg-smrtBlue text-lg font-bold text-white">
							О нас
							<div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
						</button>
					</div>
				</div>

				<div className={`flex-1 flex justify-end items-end md:my-0 my-10 relative`}>
					<div className="absolute bottom-[350px] right-[200px] text-center max-w-[300px] z-[6] px-10 py-3 font-lato text-primary bg-[#D1F772] rounded-3xl">
						{" "}
						74% учеников уже сдали экзамен на желаемый балл{" "}
					</div>
					<img src={heroPhoto} alt="billing" className="w-[60%] h-[100%] relative z-[5]" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
