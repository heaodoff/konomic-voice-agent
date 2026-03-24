import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
	id: string;
	title: string;
	content: string;
}

interface FaqsSectionProps {
	title?: string;
	description?: string;
	questions?: FaqItem[];
	contactText?: string;
	contactHref?: string;
}

export function FaqsSection({
	title = "Frequently Asked Questions",
	description = "Here are some common questions and answers.",
	questions = [],
	contactText = "customer support team",
	contactHref = "#",
}: FaqsSectionProps) {
	return (
		<section className="py-24 px-4">
		<div className="mx-auto w-full max-w-3xl space-y-7">
			<div className="text-center space-y-4 mb-4">
				<span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground">
					FAQ
				</span>
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">{title}</h2>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
					{description}
				</p>
			</div>
			<Accordion
				type="single"
				collapsible
				className="bg-card w-full -space-y-px rounded-2xl"
				defaultValue="item-1"
			>
				{questions.map((item) => (
					<AccordionItem
						value={item.id}
						key={item.id}
						className="relative border-x border-border first:rounded-t-2xl first:border-t last:rounded-b-2xl last:border-b"
					>
						<AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
							{item.title}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground pb-4 px-4">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
			<p className="text-muted-foreground text-center">
				Can&apos;t find what you&apos;re looking for? Contact our{' '}
				<a href={contactHref} className="text-primary hover:underline">
					{contactText}
				</a>
			</p>
		</div>
		</section>
	);
}
