"use client";
import Features from "@/component/landing/Features";
import Hero from "@/component/landing/Hero";
import { Navbar } from "@/component/landing/LandingNav";
import { Content } from "@/component/landing/Steps";
import BlogBlock from "@/component/landing/BlogBlock";
import Questions from "@/component/FAQs";
import Footer from "@/component/Footer";
import LandingSlider from "@/component/landing/Slider";

export default function Landing() {
	const faqList = [
		{
			question: "What Shipping Options do you have?",
			answer: "Partner removes the hassle and confusion that comes from managing your tax burden effectively.",
		},
		{
			question: "What Shipping Options do you have?",
			answer: "Partner removes the hassle and confusion that comes from managing your tax burden effectively.",
		},
		{
			question: "What Shipping Options do you have?",
			answer: "Partner removes the hassle and confusion that comes from managing your tax burden effectively.",
		},
		{
			question: "What Shipping Options do you have?",
			answer: "Partner removes the hassle and confusion that comes from managing your tax burden effectively.",
		},
		{
			question: "What Shipping Options do you have?",
			answer: "Partner removes the hassle and confusion that comes from managing your tax burden effectively.",
		},
		{
			question: "What Shipping Options do you have?",
			answer: "Partner removes the hassle and confusion that comes from managing your tax burden effectively.",
		},
	];

	return (
		<div className="min-h-screen w-full">
			<main>
				<Navbar userType="landing" />
				<Hero />
				<Features />
				<Content />
				<div className="mb-6">
					<div className="flex flex-col-reverse md:flex-row container mx-auto items-center">
						<div className="w-full md:w-1/2">
							<div className="p-5">
								<LandingSlider />
							</div>
						</div>
						<div className="w-full md:w-1/2 text-center md:text-right mx-auto mt-8 md:mt-0">
							<div className="mt-8 md:mt-0">
								<h2 className="text-3xl sm:text-5xl lg:text-6xl font-Merriweather">
									Discover Our <br></br>Dedicated<br></br>{" "}
									Counselors
								</h2>
								<p className="mt-4">
									Meet the compassionate individuals who form
									the backbone of<br></br> our counseling
									team. Each counselor brings a wealth of
									expertise<br></br> and empathy, ready to
									guide you through life's challenges with
									<br></br> understanding and support.
								</p>
							</div>
						</div>
					</div>
				</div>
				<BlogBlock />
				<Questions faqList={faqList} />
				<Footer />
			</main>
		</div>
	);
}
