import { Rocket, Server, Monitor, Settings } from "lucide-react"; // Import additional icons

const features = [
  {
    name: "In-Depth CI/CD Guides",
    description:
      "Explore comprehensive guides and best practices for setting up and optimizing your CI/CD pipelines. Learn how to automate your build and deployment processes effectively.",
    icon: Rocket, // Replace with appropriate icon
  },
  {
    name: "Cloud Infrastructure Insights",
    description:
      "Gain valuable insights into managing and scaling cloud infrastructure. Our blog covers everything from cost optimization to high availability and performance tuning.",
    icon: Server, // Replace with appropriate icon
  },
  {
    name: "Advanced Monitoring Techniques",
    description:
      "Discover advanced techniques for monitoring your DevOps environment. Find tips on setting up alerts, analyzing performance metrics, and ensuring system reliability.",
    icon: Monitor, // Replace with appropriate icon
  },
  {
    name: "Automated Configuration Management Tips",
    description:
      "Learn how to automate configuration management with the latest tools and practices. Our posts cover automation strategies to streamline environment setup and maintenance.",
    icon: Settings, // Replace with appropriate icon
  },
  {
    name: "Containerization Best Practices",
    description:
      "Understand the best practices for containerizing applications. Our blog offers tips on using Docker and Kubernetes effectively for your DevOps workflow.",
    icon: Rocket, // Add more icons if needed
  },
  {
    name: "Infrastructure as Code (IaC) Strategies",
    description:
      "Delve into Infrastructure as Code with our detailed strategies. Learn how to manage your infrastructure using code and automate provisioning with tools like Terraform and Ansible.",
    icon: Server, // Add more icons if needed
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">DevOps & Cloud Blog</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Dive Deep into DevOps and Cloud Technologies
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          Stay ahead in the world of DevOps and cloud computing with our expert articles, tutorials, and insights. Our blog covers the latest trends and best practices to help you succeed.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
