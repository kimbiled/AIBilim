import styles from "../style";
const WritingPractice = () => {
	return (
		<section className="w-full overflow-hidden mb-10">
			<h1 className="text-center flex-1 font-lato  font-semibold ss:text-[42px] text-[32px] text-smrtBlack ss:leading-[80.8px] leading-[45px]">
				Writing Practice
			</h1>
			<h2 className="text-center flex-1 font-lato font-semibold ss:text-[22px] text-[12px] text-smrtBlack ">
				Учебные материалы
			</h2>
			<div className={` ${styles.paddingX}  `}>
				<div className="flex space-x-4">
					<div className="py-4 font-lato text-lg text-smrtBlack">
						Экзамен
						<span className=" font-lato border text-sm rounded-lg ml-2 text-gray-400 pl-4 pr-20 py-2">
							IELTS
						</span>
					</div>
					<div className="py-4 font-lato text-lg text-smrtBlack">
						Уроки
						<span className=" font-lato border text-sm rounded-lg ml-2  text-gray-400  pl-4 pr-20 py-2">
							Writing №1
						</span>
					</div>{" "}
				</div>
				<label htmlFor="input-group-1" className="block font-lato mb-2 text-lg font-medium text-smrtBlack ">
					Тема вашего эссе
				</label>
				<div className="relative mb-6 max-w-[620px]">
					<input
						type="text"
						id="input-group-1"
						className="bg-gray-50 font-lato border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  "
						placeholder="Тема"
					/>
				</div>

				<div className="flex justify-between ">
					<form>
						<div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
							<div className="flex items-center justify-between px-3 py-2 border-b ">
								<div
									id="tooltip-fullscreen"
									role="tooltip"
									className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
								>
									Show full screen
									<div className="tooltip-arrow" data-popper-arrow></div>
								</div>
							</div>
							<div className="px-4 py-2 bg-white rounded-b-lg ">
								<label htmlFor="editor" className="sr-only">
									Publish post
								</label>
								<textarea
									id="editor"
									className=" w-[840px] h-[300px] block  px-0 text-sm text-gray-800 bg-white border-0 resize-none	 outline-none "
									placeholder="Write ..."
									required
								></textarea>
							</div>
						</div>
						<button
							type="submit"
							className="inline-flex items-center px-10 py-3 text-lg font-medium text-center text-white bg-smrtBlue rounded-lg focus:ring-4 focus:ring-blue-200 "
						>
							Отправить
						</button>
					</form>

					<div className=" w-[400px] h-[340px] p-4 flex flex-col items-center border rounded-lg justify-center  ">
						<div className=" bg-smrtBlue px-10 py-4 rounded-lg  text-center mb-4 font-lato text-white  ">
							Уровень A2
						</div>
						<ul className=" mb-8 space-y-4 text-left text-smrtBlack   p-4">
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="font-lato text-lg ml-4 font-semibold">Task Response</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="font-lato text-lg ml-4 font-semibold">Coherence / Cohesion</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="font-lato text-lg ml-4 font-semibold">Lexical Resourse</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="font-lato text-lg ml-4 font-semibold">
									Grammatical Range / Accuracy
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WritingPractice;
