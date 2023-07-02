import styles from "../style";
import { useState } from "react";
import "../index.css";
const FQA = () => {
	const [selectedQuestion, setSelectedQuestion] = useState(0);
	const FAQs = [
		{
			id: 1,
			question: "Вопрос 1",
			answer: "Ответ 1",
		},
		{
			id: 2,
			question: "Вопрос 2",
			answer: "Ответ 2",
		},
		{
			id: 3,
			question: "Вопрос 3",
			answer: "Ответ 3",
		},
		{
			id: 4,
			question: "Вопрос 4",
			answer: "Ответ 4",
		},
		{
			id: 5,
			question: "Вопрос 5",
			answer: "Ответ 5",
		},
	];

	const handleQuestionClick = (index: number) => {
		setSelectedQuestion(index);

		if (window.innerWidth < 1200) {
			const bottomDiv = document.getElementById("bottomDiv");
			bottomDiv?.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className={`bg-smrtBlue font-bold pb-[185px] text-white font-lato ${styles.paddingX}`}>
			<div className="container max-w-[1315px] mx-auto">
				<h2 className="text-center text-6xl font-bold mb-[60px] text-white shadow1">
					Часто задаваемые вопросы
				</h2>
				<div className="relative flex flex-col lg:flex-row-reverse gap-[40px]">
					<ul className="rounded-[15px] bg-white z-10 left-0 top-[38px] w-[705px] lg:absolute mx-auto">
						{FAQs.map((item, index) => (
							<li
								key={index}
								className={`text-smrtBlack leading-[120%] border-solid border-b-2 pl-[27px] pr-[55px] flex items-center pt-[35px] pb-[31px] gap-[28px] last:border-0 cursor-pointer ${
									selectedQuestion === index ? "question-box-shadow" : ""
								}`}
								onClick={() => handleQuestionClick(index)}
							>
								<div
									className={`rounded-full ${
										selectedQuestion === index ? "bg-chosenQuestion" : " bg-gray-800"
									} w-[18px] h-[18px]`}
								></div>
								<p className="text-[19px]">{item.question}</p>
							</li>
						))}
					</ul>
					<div
						id="bottomDiv"
						className="relative w-[711px] h-[505px] rounded-lg bg-gradient-to-b from-smrtBlue to-grad2 pl-[169px] pr-[38px] pt-[40px] pb-[100px] border-solid border-[1px] border-white text-left mx-auto lg:mx-0"
					>
						<h3 className="text-[28px] mb-[34px]">{FAQs[selectedQuestion].question}</h3>
						<p className="text-[22px] leading-[120%]">{FAQs[selectedQuestion].answer}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FQA;
