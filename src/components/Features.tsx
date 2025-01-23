import { CheckCircle2, Zap, Clock, Shield } from "lucide-react";

const features = [
  {
    name: 'High Quality Prints',
    description: 'Professional grade 3D printing with precise detail and smooth finish.',
    icon: CheckCircle2,
  },
  {
    name: 'Fast Turnaround',
    description: 'Quick processing and shipping to meet your deadlines.',
    icon: Zap,
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock customer service to assist with your projects.',
    icon: Clock,
  },
  {
    name: 'Secure Uploads',
    description: 'Your 3D models and data are protected with enterprise-grade security.',
    icon: Shield,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for perfect 3D prints
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}