"use client";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/LandingNav";
import { Content } from "@/components/Steps";
import BlogBlock from "@/components/ui/users/BlogBlock";
import Questions from "@/components/ui/users/FAQs";
import Footer from "@/components/ui/users/Footer";
import LandingSlider from "@/components/ui/users/Slider";

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
