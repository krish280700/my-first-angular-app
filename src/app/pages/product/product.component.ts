import { Component } from '@angular/core';
import { CardComponent } from '../../component/card/card.component';
import { ButtonComponent } from "../../baseComponents/button/button.component";
import { CarouselComponent } from '../../component/carousel/carousel.component';
import { testimonials } from '../../mock/header';
@Component({
	selector: 'app-product',
	standalone: true,
	imports: [CardComponent, ButtonComponent, CarouselComponent],
	templateUrl: './product.component.html',
	styleUrl: './product.component.scss'
})
export class ProductComponent {
	testimonials = testimonials
	problemContent = [
		{
			header: 'Scattered Conversations',
			content1: 'Emails, social media DMs, live chat, and messaging apps like WhatsApp and Messenger have become the go-to channels for customers. The problem? Each platform is its own island.',
			content2: 'You have to constantly switch between apps to check for new inquiries, often missing important messages or delaying your responses. This leads to scattered conversations, frustration, and ultimately a poor customer experience.'
		},
		{
			header: 'Time-Consuming Manual Responses',
			content1: "Responding manually to every message, whether it's answering FAQs, scheduling meetings, or handling customer complaints, can take up hours of your day.",
			content2: "Repetitive questions such as “What are your working hours?” or “What’s your refund policy?” continue to flood your inbox, forcing you to spend valuable time typing the same answers over and over again."
		},
		{
			header: 'Lack of Organization and Insights',
			content1: "With messages scattered across platforms, it’s impossible to have a clear overview of your customer interactions. Are you providing timely responses? Which customers need follow-ups? What are your most common inquiries?",
			content2: "Without organization and insights, you can’t make data-driven improvements to your communication strategy, leading to inefficiencies and lost revenue."
		},
		{
			header: 'Overwhelming Complexity',
			content1: "Even if you have multiple team members managing different platforms, keeping everyone in sync becomes difficult. Assigning inquiries, ensuring no message is missed, and maintaining a consistent tone and quality in your responses can turn into a logistical nightmare.",
		},
	]

	solutionContent = [
		{
			header: 'One Centralized Inbox for All Platforms',
			body:[
				'No more jumping between apps or missing important messages. Omnichat integrates with your email, social media DMs, and messaging platforms like WhatsApp, Facebook, Instagram, and more.'
			]
		},
		{
			header: 'AI-Powered Smart Replies',
			body:[
				'Omnichat’s AI doesn’t just help you organize your messages—it assists you in responding to them. Our AI generates smart, context-aware responses, saving you from repetitive typing.'
			]
		},
		{
			header: 'Automated Responses for Repetitive Inquiries',
			body:[
				'Set up automated replies for frequently asked questions, such as business hours, return policies, or shipping information. The AI can instantly send accurate answers to routine queries, allowing you to focus on more critical tasks that require personal attention.'
			]
		},
	]
}
