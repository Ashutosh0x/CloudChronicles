"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { SubmitButton } from "../dashboard/SubmitButtons";
import Link from "next/link";
import { CreateSubscription } from "@/app/actions";
import { useState } from "react";
import { FaTwitter, FaGithub, FaDiscord, FaReddit, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface iAppProps {
  id: number;
  cardTitle: string;
  cardDescription: string;
  priceTitle: string;
  benefits: string[];
}

export const PricingPlans: iAppProps[] = [
  {
    id: 0,
    cardTitle: "Basic Access",
    cardDescription: "Ideal for those starting to explore DevOps and cloud topics.",
    benefits: [
      "Access to Limited Blog Write-ups",
      "Monthly Newsletters",
      "Community Forum Access",
      "Basic Learning Resources",
    ],
    priceTitle: "Free",
  },
  {
    id: 1,
    cardTitle: "Pro Access",
    cardDescription: "Perfect for professionals seeking unlimited insights and advanced tutorials.",
    priceTitle: "$49",
    benefits: [
      "Unlimited Blog Write-ups",
      "Weekly Expert Insights",
      "Exclusive Webinars",
      "Advanced Learning Resources",
    ],
  },
];

export function PricingTable() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your subscription logic here
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-semibold text-primary">Subscription Plans</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Access Unlimited Insights with Our Subscription Plans
        </h1>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center leading-tight text-muted-foreground dark:text-muted-foreground-dark">
        Choose the plan that best fits your needs for accessing unlimited blog write-ups and resources on DevOps and cloud. Each plan is tailored to enhance your learning and professional growth.
      </p>

      <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2">
        {PricingPlans.map((item) => (
          <Card
            key={item.id}
            className={`border ${item.id === 1 ? "border-primary shadow-xl bg-gradient-to-br from-primary-500 to-primary-700 dark:bg-gradient-to-br dark:from-primary-700 dark:to-primary-900" : "border-muted-foreground bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800"} rounded-lg transform transition-transform duration-300 hover:scale-105`}
          >
            <CardHeader>
              <CardTitle>
                {item.id === 1 ? (
                  <div className="flex items-center justify-between">
                    <h3 className="text-primary text-2xl font-semibold">Pro Access</h3>
                    <p className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold leading-5 text-primary">
                      Most popular
                    </p>
                  </div>
                ) : (
                  <>{item.cardTitle}</>
                )}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground dark:text-muted-foreground-dark mt-2">
                {item.cardDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={`mt-6 text-4xl font-extrabold ${item.id === 1 ? "text-primary" : "text-gray-900 dark:text-gray-100"}`}>
                {item.priceTitle}
              </p>

              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground dark:text-muted-foreground-dark">
                {item.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-x-3 items-center">
                    <CheckCircle className={`text-${item.id === 1 ? "primary" : "gray-600"} w-6 h-6 bg-${item.id === 1 ? "primary/20" : "gray-300"} dark:bg-${item.id === 1 ? "primary/30" : "gray-700"} rounded-full p-1`} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {item.id === 1 ? (
                <form className="w-full" action={CreateSubscription}>
                  <SubmitButton text="Subscribe Now" className="mt-5 w-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300" />
                </form>
              ) : (
                <Button variant="outline" className="mt-5 w-full hover:bg-primary/10 transition-colors duration-300" asChild>
                  <Link href="/dashboard">Start Free Trial</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Stay Updated</h2>
        <p className="mt-2 text-sm text-muted-foreground dark:text-muted-foreground-dark">
          Subscribe to our newsletter for the latest updates on DevOps and cloud topics.
        </p>

        <form className="mt-8 flex flex-col items-center" onSubmit={handleSubscription}>
          <div className="flex items-center gap-x-3">
            <FaEnvelope className="w-6 h-6 text-muted-foreground dark:text-muted-foreground-dark" />
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-muted-foreground dark:border-muted-foreground-dark rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className={`px-4 py-2 rounded-lg ${isSubscribed ? "bg-green-500 text-white" : "bg-primary text-white"} transition-colors duration-300`}>
              {isSubscribed ? "Subscribed!" : "Subscribe"}
            </Button>
          </div>
        </form>
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <div className="flex justify-center gap-x-4 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 text-blue-500 hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-gray-700 hover:text-gray-800 transition-colors duration-300" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="w-6 h-6 text-blue-400 hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
            <FaReddit className="w-6 h-6 text-orange-600 hover:text-orange-700 transition-colors duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-800 transition-colors duration-300" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
          &copy; {new Date().getFullYear()} Cloud Chronicles
        </p>
      </div>
    </>
  );
}
