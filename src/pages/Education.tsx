import {useEffect,useState } from "react";
import { pagination } from "../assets";
import styles from "../style";
import db from '../../public/db.json'

const Education = () => {
	const [examInput, setExamInput] = useState("");

	const userName = db.practiceDescription.map(item=>{
		return(
			<div className="hoverShadow w-full h-32 border-[1px] rounded-md mb-6 border-practiceBorderGray flex flex-row items-center p-8 justify-between">
				<div className="flex flex-row gap-6">
					<p className="text-smrtBlue font-black text-5xl" key={item.id}>{item.date}</p>
					<div className="leading-6">
						<p className="text-xl text-smrtBlack">{item.month}</p>
						<p className="font-medium text-practiceGray">{item.time}</p>
					</div>

					<div className="ml-4">
						<p className="text-xl text-smrtBlack">{item.title}</p>
						<p className="font-medium text-practiceGray">{item.task}</p>
					</div>
				</div>
				<button className="hoverButton w-36 h-11 border-[1px] border-smrtBlue text-smrtBlue text-sm rounded-md">
					Начать
				</button>
			</div>
		)
	});
	
	// let filteredList = db.practiceDescription.filter(function(item){
	// 	return item.exam.toLowerCase().includes(examInput.toLowerCase())
	// })


	let	shuffledArr = userName.sort(function(){ 
		return Math.random() - 0.5
	});


	return (
		<>
			<div className={` ${styles.paddingX} ${styles.boxWidth} font-lato font-bold `}>
				<div className="text-center mt-16">
					<p className="text-smrtBlack shadow1">Мейрамбеков Нурсултан</p>
					<p className="text-primary text-3xl mt-4"> Учебные материалы</p>
				</div>

				<div className="flex flex-row gap-16 mt-14 mb-8">
					<div className="flex gap-4 items-center">
						<p className="font-medium text-xl">Экзамен</p>
						<input
							type="text"
							placeholder="IELTS"
							className="border-[1px] border-[#C0C0C0] w-48 h-9 rounded-md p-2 text-sm"
							onChange={(e)=>setExamInput(e.target.value)}
							value={examInput}
						/>
					</div>

					<div className="flex gap-4 items-center">
						<p className="font-medium text-xl">Уроки</p>
						<input
							type="text"
							placeholder="Writing Task 1"
							className="border-[1px] border-[#C0C0C0] w-48 h-9 rounded-md p-2 text-sm"
						/>
					</div>
				</div>

				{shuffledArr}

				<div>
					<nav className="w-24 h-12 m-auto">
						<ul className="cursor-pointer flex justify-between items-center">
							<li className="text-smrtBlue">1</li>
							<li	className="hover:text-smrtBlue ease-in-out">2</li>
							<li	className="hover:text-smrtBlue ease-in-out">3</li>
							<li	className="hover:text-smrtBlue ease-in-out">4</li>
							<li >
								<img src={pagination} alt="nextPage" className="hover:fill-blue-500"/>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Education;
